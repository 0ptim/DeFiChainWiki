---
title: Sync stops
description: TODO - Short description of this page.
permalink: /Sync_stops/
---

## Sync stops \> 99% {#sync-stops--99}

### Wrong system time {#wrong-system-time}

If the synchronization stops just before the end (\>98%), check the [debug.log](./Debug.log.md) to see if there are any errors there.

**Error:**

If your system clock is not correct, it will not be possible to synchronize to the end.

`Time-to-new, block timestamp too far in the future (code 16)`.

**Solution:**

Set the system clock correctly.
