# Quota Checker

Problem:
* Many offline storage methods (appcache, localstorage, indexeddb,
  websql, chrome.storage).
* Many configurations (temporary, persistent, unlimitedStorage, quota API).
* Many browsers.

Nobody really seems to know how much space is available for which
configuration.

Solution:
A quota checker application that pushes the quotas to the limit
(somewhat tricky for persistent & unlimitedStorage though, since we may
clutter up the user's machine).
