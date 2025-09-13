#target premierepro

// A super-simple sanity check script for Premiere Pro
// If Premiere is open, this will show a dialog.

(function () {
    // 1) Prove we're talking to Premiere
    alert("Hello from VS Code! 🎬");

    // 2) If a project is open, show its name (optional)
    try {
        if (app && app.project) {
            var name = app.project.path ? app.project.path : app.project.name;
            if (name) {
                alert("Active project: " + name);
            } else {
                alert("A project appears to be open, but I couldn't read its name.");
            }
        } else {
            alert("No project detected. Try opening a project in Premiere first.");
        }
    } catch (e) {
        alert("ExtendScript error: " + e);
    }
})();
