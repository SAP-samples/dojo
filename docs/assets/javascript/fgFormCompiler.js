function compileForm(reqType, data) {
    var title;
    var labels;
    var body;

    switch (reqType) {
        //Belt Request Formatting
        case "belt":
            //console.log("[compileForm >> Belt Request]");
            //console.log("\Domain: "+data.dis);
            //console.log("\tBelt Color: "+data.belt);
            title = encodeURIComponent("Belt Request Assistance Needed: " + data.dis + " " + data.belt);
            labels = encodeURIComponent("belt request, " + data.dis.toLowerCase() + ", " + data.belt.toLowerCase());
            break;
        //Dialog Request Formatting
        case "dialog":
            //console.log("[compileForm >> Dialog Request]");
            //console.log("\tRequester: "+data.requester);
            //console.log("\tGroup: "+data.group);
            //console.log("\tContact: "+data.contact);
            //console.log("\tContext: "+data.context);
            //console.log("\tDate: "+data.date);
            title = encodeURIComponent("Dialog Request");
            labels = encodeURIComponent("dialog request");
            body = encodeURIComponent("**Requester**: " + data.requester + "<br>**Group**: " + data.group + "<br>**Preferred Contact Method**: " + data.contact + "<br>**Context**: " + data.context + "<br>**Desired Date**: " + data.date);
            break;

        //Unknown request type
        default:
            throw "unmapped request type"
    }


    //console.log("[URL Query]");
    //console.log("\tTitle: "+title);
    //console.log("\tLabels: "+labels);
    var queryParms = '';

    if (title) {
        queryParms += 'title=' + title + '&';
    }
    if (labels) {
        queryParms += 'labels=' + labels + '&';
    }
    if (body) {
        queryParms += 'body=' + body + '&';
    }

    //console.log("\tQuery Params: "+queryParms);
    window.location.href = 'https://github.com/sap-samples/dojo/issues/new?' + queryParms;
}
