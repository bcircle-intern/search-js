#addin "wk.StartProcess";

using PS = StartProcess.Processor;

Task("Run").Does(() => {
    PS.StartProcess("parcel src/index.html");
});

var target = Argument("target", "run");
RunTarget(target);
