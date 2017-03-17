/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, window, location, CSInterface, SystemPath, themeManager*/

(function () {
    'use strict';

    var csInterface = new CSInterface();
    
    function init() {
                
        themeManager.init();
                
        $("#infoButton").click(function () {
            csInterface.evalScript('showInfo()');
        });
        
        $("#homeButton").click(function () {
            $("#siteloader").html('<object data="http://digital/digital/" style="width:100%;height:380px">');
        });
    }
        
    init();

}());
    
function onLoaded() {
    'use strict';
	//window.location.href = "http://digital/digital/";
    $("#siteloader").html('<object data="http://digital/digital/" style="width:100%;height:380px">');
}