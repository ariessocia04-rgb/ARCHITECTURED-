# Print-agent technical bootstrap

This is a Rust workspace member with the exact Tauri crate pin required by CX-R1-001.
It intentionally has no Tauri window, tray, enrollment, network, filesystem, printer, queue,
or job-delivery behavior. Those capabilities require later, separately authorized work.
