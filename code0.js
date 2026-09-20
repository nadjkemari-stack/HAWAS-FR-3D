gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.idToCallbackMap = new Map();
gdjs.Game_32SceneCode.GDHazardObjects1_1final = [];

gdjs.Game_32SceneCode.GDJumpButtonObjects1_1final = [];

gdjs.Game_32SceneCode.GDMonsterObjects1_1final = [];

gdjs.Game_32SceneCode.GDPlayerObjects1_1final = [];

gdjs.Game_32SceneCode.GDTrainObjects1_1final = [];

gdjs.Game_32SceneCode.GDPlayerObjects1= [];
gdjs.Game_32SceneCode.GDPlayerObjects2= [];
gdjs.Game_32SceneCode.GDPlayerObjects3= [];
gdjs.Game_32SceneCode.GDBackgroundObjects1= [];
gdjs.Game_32SceneCode.GDBackgroundObjects2= [];
gdjs.Game_32SceneCode.GDBackgroundObjects3= [];
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1= [];
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects2= [];
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects3= [];
gdjs.Game_32SceneCode.GDDistance_9595UITextObjects1= [];
gdjs.Game_32SceneCode.GDDistance_9595UITextObjects2= [];
gdjs.Game_32SceneCode.GDDistance_9595UITextObjects3= [];
gdjs.Game_32SceneCode.GDBoundary_9595RightObjects1= [];
gdjs.Game_32SceneCode.GDBoundary_9595RightObjects2= [];
gdjs.Game_32SceneCode.GDBoundary_9595RightObjects3= [];
gdjs.Game_32SceneCode.GDHazardObjects1= [];
gdjs.Game_32SceneCode.GDHazardObjects2= [];
gdjs.Game_32SceneCode.GDHazardObjects3= [];
gdjs.Game_32SceneCode.GDBoundary_9595LeftObjects1= [];
gdjs.Game_32SceneCode.GDBoundary_9595LeftObjects2= [];
gdjs.Game_32SceneCode.GDBoundary_9595LeftObjects3= [];
gdjs.Game_32SceneCode.GDJumpButtonObjects1= [];
gdjs.Game_32SceneCode.GDJumpButtonObjects2= [];
gdjs.Game_32SceneCode.GDJumpButtonObjects3= [];
gdjs.Game_32SceneCode.GDPlatform_9595FloatingObjects1= [];
gdjs.Game_32SceneCode.GDPlatform_9595FloatingObjects2= [];
gdjs.Game_32SceneCode.GDPlatform_9595FloatingObjects3= [];
gdjs.Game_32SceneCode.GDTrainObjects1= [];
gdjs.Game_32SceneCode.GDTrainObjects2= [];
gdjs.Game_32SceneCode.GDTrainObjects3= [];
gdjs.Game_32SceneCode.GDMonsterObjects1= [];
gdjs.Game_32SceneCode.GDMonsterObjects2= [];
gdjs.Game_32SceneCode.GDMonsterObjects3= [];


gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDHazardObjects2Objects = Hashtable.newFrom({"Hazard": gdjs.Game_32SceneCode.GDHazardObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTrainObjects2Objects = Hashtable.newFrom({"Train": gdjs.Game_32SceneCode.GDTrainObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDMonsterObjects2Objects = Hashtable.newFrom({"Monster": gdjs.Game_32SceneCode.GDMonsterObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlatform_95959595GroundObjects2Objects = Hashtable.newFrom({"Platform_Ground": gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlatform_95959595GroundObjects2Objects = Hashtable.newFrom({"Platform_Ground": gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDHazardObjects1ObjectsGDgdjs_9546Game_959532SceneCode_9546GDPlatform_95959595FloatingObjects1ObjectsGDgdjs_9546Game_959532SceneCode_9546GDPlatform_95959595GroundObjects1ObjectsGDgdjs_9546Game_959532SceneCode_9546GDTrainObjects1ObjectsGDgdjs_9546Game_959532SceneCode_9546GDMonsterObjects1Objects = Hashtable.newFrom({"Hazard": gdjs.Game_32SceneCode.GDHazardObjects1, "Platform_Floating": gdjs.Game_32SceneCode.GDPlatform_9595FloatingObjects1, "Platform_Ground": gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1, "Train": gdjs.Game_32SceneCode.GDTrainObjects1, "Monster": gdjs.Game_32SceneCode.GDMonsterObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlatform_95959595GroundObjects1Objects = Hashtable.newFrom({"Platform_Ground": gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1});
gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Boundary_Right"), gdjs.Game_32SceneCode.GDBoundary_9595RightObjects2);
gdjs.copyArray(gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1, gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlatform_95959595GroundObjects2Objects);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlatform_95959595GroundObjects2Objects, (( gdjs.Game_32SceneCode.GDBoundary_9595RightObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDBoundary_9595RightObjects2[0].getPointX("")), (( gdjs.Game_32SceneCode.GDBoundary_9595RightObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDBoundary_9595RightObjects2[0].getPointY("")), false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects2 */
{gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).setNumber((( gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects2[0].getAABBRight()));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getPickedInstancesCount(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDHazardObjects1ObjectsGDgdjs_9546Game_959532SceneCode_9546GDPlatform_95959595FloatingObjects1ObjectsGDgdjs_9546Game_959532SceneCode_9546GDPlatform_95959595GroundObjects1ObjectsGDgdjs_9546Game_959532SceneCode_9546GDTrainObjects1ObjectsGDgdjs_9546Game_959532SceneCode_9546GDMonsterObjects1Objects) > 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Boundary_Right"), gdjs.Game_32SceneCode.GDBoundary_9595RightObjects2);
gdjs.copyArray(gdjs.Game_32SceneCode.GDHazardObjects1, gdjs.Game_32SceneCode.GDHazardObjects2);

gdjs.copyArray(gdjs.Game_32SceneCode.GDMonsterObjects1, gdjs.Game_32SceneCode.GDMonsterObjects2);

gdjs.copyArray(gdjs.Game_32SceneCode.GDPlatform_9595FloatingObjects1, gdjs.Game_32SceneCode.GDPlatform_9595FloatingObjects2);

gdjs.copyArray(gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1, gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects2);

gdjs.copyArray(gdjs.Game_32SceneCode.GDTrainObjects1, gdjs.Game_32SceneCode.GDTrainObjects2);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDHazardObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDHazardObjects2[i].setX((( gdjs.Game_32SceneCode.GDBoundary_9595RightObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDBoundary_9595RightObjects2[0].getPointX("")));
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDPlatform_9595FloatingObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlatform_9595FloatingObjects2[i].setX((( gdjs.Game_32SceneCode.GDBoundary_9595RightObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDBoundary_9595RightObjects2[0].getPointX("")));
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects2[i].setX((( gdjs.Game_32SceneCode.GDBoundary_9595RightObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDBoundary_9595RightObjects2[0].getPointX("")));
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDTrainObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTrainObjects2[i].setX((( gdjs.Game_32SceneCode.GDBoundary_9595RightObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDBoundary_9595RightObjects2[0].getPointX("")));
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDMonsterObjects2[i].setX((( gdjs.Game_32SceneCode.GDBoundary_9595RightObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDBoundary_9595RightObjects2[0].getPointX("")));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getPickedInstancesCount(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlatform_95959595GroundObjects1Objects) > 0;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1[i].setX(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).getAsNumber());
}
}
}

}


};gdjs.Game_32SceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1.5);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}
}

}


{

gdjs.Game_32SceneCode.GDJumpButtonObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Game_32SceneCode.GDJumpButtonObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.Game_32SceneCode.GDJumpButtonObjects2);
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDJumpButtonObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDJumpButtonObjects2[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_1 = true;
        gdjs.Game_32SceneCode.GDJumpButtonObjects2[k] = gdjs.Game_32SceneCode.GDJumpButtonObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDJumpButtonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Game_32SceneCode.GDJumpButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Game_32SceneCode.GDJumpButtonObjects1_1final.indexOf(gdjs.Game_32SceneCode.GDJumpButtonObjects2[j]) === -1 )
            gdjs.Game_32SceneCode.GDJumpButtonObjects1_1final.push(gdjs.Game_32SceneCode.GDJumpButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Game_32SceneCode.GDJumpButtonObjects1_1final, gdjs.Game_32SceneCode.GDJumpButtonObjects1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
}

}


{

gdjs.Game_32SceneCode.GDHazardObjects1.length = 0;

gdjs.Game_32SceneCode.GDMonsterObjects1.length = 0;

gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;

gdjs.Game_32SceneCode.GDTrainObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Game_32SceneCode.GDHazardObjects1_1final.length = 0;
gdjs.Game_32SceneCode.GDMonsterObjects1_1final.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects1_1final.length = 0;
gdjs.Game_32SceneCode.GDTrainObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Hazard"), gdjs.Game_32SceneCode.GDHazardObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects2Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDHazardObjects2Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Game_32SceneCode.GDHazardObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Game_32SceneCode.GDHazardObjects1_1final.indexOf(gdjs.Game_32SceneCode.GDHazardObjects2[j]) === -1 )
            gdjs.Game_32SceneCode.GDHazardObjects1_1final.push(gdjs.Game_32SceneCode.GDHazardObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.Game_32SceneCode.GDPlayerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Game_32SceneCode.GDPlayerObjects1_1final.indexOf(gdjs.Game_32SceneCode.GDPlayerObjects2[j]) === -1 )
            gdjs.Game_32SceneCode.GDPlayerObjects1_1final.push(gdjs.Game_32SceneCode.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Train"), gdjs.Game_32SceneCode.GDTrainObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects2Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTrainObjects2Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Game_32SceneCode.GDPlayerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Game_32SceneCode.GDPlayerObjects1_1final.indexOf(gdjs.Game_32SceneCode.GDPlayerObjects2[j]) === -1 )
            gdjs.Game_32SceneCode.GDPlayerObjects1_1final.push(gdjs.Game_32SceneCode.GDPlayerObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.Game_32SceneCode.GDTrainObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Game_32SceneCode.GDTrainObjects1_1final.indexOf(gdjs.Game_32SceneCode.GDTrainObjects2[j]) === -1 )
            gdjs.Game_32SceneCode.GDTrainObjects1_1final.push(gdjs.Game_32SceneCode.GDTrainObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Game_32SceneCode.GDMonsterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects2Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDMonsterObjects2Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Game_32SceneCode.GDMonsterObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Game_32SceneCode.GDMonsterObjects1_1final.indexOf(gdjs.Game_32SceneCode.GDMonsterObjects2[j]) === -1 )
            gdjs.Game_32SceneCode.GDMonsterObjects1_1final.push(gdjs.Game_32SceneCode.GDMonsterObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.Game_32SceneCode.GDPlayerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Game_32SceneCode.GDPlayerObjects1_1final.indexOf(gdjs.Game_32SceneCode.GDPlayerObjects2[j]) === -1 )
            gdjs.Game_32SceneCode.GDPlayerObjects1_1final.push(gdjs.Game_32SceneCode.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Game_32SceneCode.GDHazardObjects1_1final, gdjs.Game_32SceneCode.GDHazardObjects1);
gdjs.copyArray(gdjs.Game_32SceneCode.GDMonsterObjects1_1final, gdjs.Game_32SceneCode.GDMonsterObjects1);
gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayerObjects1_1final, gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.copyArray(gdjs.Game_32SceneCode.GDTrainObjects1_1final, gdjs.Game_32SceneCode.GDTrainObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), false);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.Game_32SceneCode.GDBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Boundary_Left"), gdjs.Game_32SceneCode.GDBoundary_9595LeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("Boundary_Right"), gdjs.Game_32SceneCode.GDBoundary_9595RightObjects1);
gdjs.copyArray(runtimeScene.getObjects("Distance_UIText"), gdjs.Game_32SceneCode.GDDistance_9595UITextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDDistance_9595UITextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDDistance_9595UITextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene))));
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBackgroundObjects1[i].setXOffset((( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getPointX("")) / 2);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDBoundary_9595LeftObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBoundary_9595LeftObjects1[i].setX((( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getPointX("Boundary_Left")));
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDBoundary_9595RightObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBoundary_9595RightObjects1[i].setX((( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getPointX("Boundary_Right")));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Boundary_Left"), gdjs.Game_32SceneCode.GDBoundary_9595LeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("Hazard"), gdjs.Game_32SceneCode.GDHazardObjects1);
gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Game_32SceneCode.GDMonsterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Platform_Floating"), gdjs.Game_32SceneCode.GDPlatform_9595FloatingObjects1);
gdjs.copyArray(runtimeScene.getObjects("Platform_Ground"), gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Train"), gdjs.Game_32SceneCode.GDTrainObjects1);

{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("FurthestRight_Platform_Ground", variable);
}
gdjs.Game_32SceneCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDHazardObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDHazardObjects1[i].getX() < (( gdjs.Game_32SceneCode.GDBoundary_9595LeftObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDBoundary_9595LeftObjects1[0].getPointX("")) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDHazardObjects1[k] = gdjs.Game_32SceneCode.GDHazardObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDHazardObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlatform_9595FloatingObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlatform_9595FloatingObjects1[i].getX() < (( gdjs.Game_32SceneCode.GDBoundary_9595LeftObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDBoundary_9595LeftObjects1[0].getPointX("")) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlatform_9595FloatingObjects1[k] = gdjs.Game_32SceneCode.GDPlatform_9595FloatingObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlatform_9595FloatingObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1[i].getX() < (( gdjs.Game_32SceneCode.GDBoundary_9595LeftObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDBoundary_9595LeftObjects1[0].getPointX("")) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1[k] = gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDTrainObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDTrainObjects1[i].getX() < (( gdjs.Game_32SceneCode.GDBoundary_9595LeftObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDBoundary_9595LeftObjects1[0].getPointX("")) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDTrainObjects1[k] = gdjs.Game_32SceneCode.GDTrainObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDTrainObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDMonsterObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDMonsterObjects1[i].getX() < (( gdjs.Game_32SceneCode.GDBoundary_9595LeftObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDBoundary_9595LeftObjects1[0].getPointX("")) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDMonsterObjects1[k] = gdjs.Game_32SceneCode.GDMonsterObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDMonsterObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList0(runtimeScene);} //End of subevents
}
gdjs.Game_32SceneCode.localVariables.pop();

}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects3.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects3.length = 0;
gdjs.Game_32SceneCode.GDDistance_9595UITextObjects1.length = 0;
gdjs.Game_32SceneCode.GDDistance_9595UITextObjects2.length = 0;
gdjs.Game_32SceneCode.GDDistance_9595UITextObjects3.length = 0;
gdjs.Game_32SceneCode.GDBoundary_9595RightObjects1.length = 0;
gdjs.Game_32SceneCode.GDBoundary_9595RightObjects2.length = 0;
gdjs.Game_32SceneCode.GDBoundary_9595RightObjects3.length = 0;
gdjs.Game_32SceneCode.GDHazardObjects1.length = 0;
gdjs.Game_32SceneCode.GDHazardObjects2.length = 0;
gdjs.Game_32SceneCode.GDHazardObjects3.length = 0;
gdjs.Game_32SceneCode.GDBoundary_9595LeftObjects1.length = 0;
gdjs.Game_32SceneCode.GDBoundary_9595LeftObjects2.length = 0;
gdjs.Game_32SceneCode.GDBoundary_9595LeftObjects3.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595FloatingObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595FloatingObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595FloatingObjects3.length = 0;
gdjs.Game_32SceneCode.GDTrainObjects1.length = 0;
gdjs.Game_32SceneCode.GDTrainObjects2.length = 0;
gdjs.Game_32SceneCode.GDTrainObjects3.length = 0;
gdjs.Game_32SceneCode.GDMonsterObjects1.length = 0;
gdjs.Game_32SceneCode.GDMonsterObjects2.length = 0;
gdjs.Game_32SceneCode.GDMonsterObjects3.length = 0;

gdjs.Game_32SceneCode.eventsList1(runtimeScene);
gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects3.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects3.length = 0;
gdjs.Game_32SceneCode.GDDistance_9595UITextObjects1.length = 0;
gdjs.Game_32SceneCode.GDDistance_9595UITextObjects2.length = 0;
gdjs.Game_32SceneCode.GDDistance_9595UITextObjects3.length = 0;
gdjs.Game_32SceneCode.GDBoundary_9595RightObjects1.length = 0;
gdjs.Game_32SceneCode.GDBoundary_9595RightObjects2.length = 0;
gdjs.Game_32SceneCode.GDBoundary_9595RightObjects3.length = 0;
gdjs.Game_32SceneCode.GDHazardObjects1.length = 0;
gdjs.Game_32SceneCode.GDHazardObjects2.length = 0;
gdjs.Game_32SceneCode.GDHazardObjects3.length = 0;
gdjs.Game_32SceneCode.GDBoundary_9595LeftObjects1.length = 0;
gdjs.Game_32SceneCode.GDBoundary_9595LeftObjects2.length = 0;
gdjs.Game_32SceneCode.GDBoundary_9595LeftObjects3.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595FloatingObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595FloatingObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595FloatingObjects3.length = 0;
gdjs.Game_32SceneCode.GDTrainObjects1.length = 0;
gdjs.Game_32SceneCode.GDTrainObjects2.length = 0;
gdjs.Game_32SceneCode.GDTrainObjects3.length = 0;
gdjs.Game_32SceneCode.GDMonsterObjects1.length = 0;
gdjs.Game_32SceneCode.GDMonsterObjects2.length = 0;
gdjs.Game_32SceneCode.GDMonsterObjects3.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;
