/* Production maintenance only. Copy beside Code.gs, never into rehearsal.
 * Private names cannot be invoked by google.script.run. No mail or deletion. */
function ndProductionSummaryConfig_() {
  if (ND_SCHEMA !== 'nodina-production-contact-file-v1') throw new Error('production required');
  var cfg = ndSettings_(true);
  if (cfg.properties.getProperty('ND_SUMMARY_EVERY_HOURS') !== '1') throw new Error('hourly configuration required');
  return cfg;
}

function ndInstallProductionSummarySchedule_() {
  var cfg = ndProductionSummaryConfig_();
  ScriptApp.requireAllScopes(ScriptApp.AuthMode.FULL);
  // Establish a complete initial snapshot before adding any scheduled writer.
  ndRebuildSummary_();
  var lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) throw new Error('busy');
  try {
    var props = cfg.properties, handler = 'ndRunProductionSummary_';
    var triggers = ScriptApp.getProjectTriggers().filter(function (t) { return t.getHandlerFunction() === handler; });
    var saved = props.getProperty('ND_SUMMARY_TRIGGER_ID');
    if (triggers.length === 1 && saved === triggers[0].getUniqueId() && triggers[0].getEventType() === ScriptApp.EventType.CLOCK && props.getProperty('ND_SUMMARY_SCHEDULE_VERSION') === 'hourly-v1') {
      return {installed: true, already_present: true};
    }
    // An ambiguous creation cannot be retried into a duplicate schedule.
    if (triggers.length || saved || props.getProperty('ND_SUMMARY_SCHEDULE_VERSION')) throw new Error('schedule reconciliation required');
    props.setProperty('ND_SUMMARY_SCHEDULE_VERSION', 'creating');
    var trigger = ScriptApp.newTrigger(handler).timeBased().everyHours(1).inTimezone('Europe/Paris').create();
    props.setProperty('ND_SUMMARY_TRIGGER_ID', trigger.getUniqueId());
    props.setProperty('ND_SUMMARY_SCHEDULE_VERSION', 'hourly-v1');
    return {installed: true, already_present: false};
  } finally { lock.releaseLock(); }
}

function ndRunProductionSummary_(event) {
  var cfg = ndProductionSummaryConfig_();
  if (!event || !event.triggerUid || String(event.triggerUid) !== cfg.properties.getProperty('ND_SUMMARY_TRIGGER_ID') || cfg.properties.getProperty('ND_SUMMARY_SCHEDULE_VERSION') !== 'hourly-v1') throw new Error('scheduled trigger required');
  ndRebuildSummary_();
}
