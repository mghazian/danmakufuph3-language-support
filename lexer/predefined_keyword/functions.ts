import {IPattern} from '../interface/IPattern';

export let Function: IPattern[] = [{
	name: "math",
	pattern: "\\b(add|subtract|multiply|divide|remainder|power|min|max|log|log10|cos|sin|tan|acos|asin|atan|atan2|rand|round|truncate|ceil|floor|absolute|modc)\\b"
},
{
	name: "text",
	pattern: "\\b(InstallFont|ToString|IntToString|itoa|rtoa|rtos|vtos|atoi|ator|TrimString|SplitString)\\b"
},
{
	name: "path",
	pattern: "\\b(GetFileDirectory|GetFilePathList|GetDirectoryList|GetModuleDirectory|GetMainStgScriptPath|GetMainPackageScriptPath|GetMainStgScriptDirectory|GetCurrentScriptDirectory|GetScriptPathList)\\b"
},
{
	name: "time",
	pattern: "\\b(GetCurrentDateTimeS|GetStageTime|GetPackageTime|GetCurrentFps|GetReplayFps)\\b"
},
{
	name: "debug",
	pattern: "\\b(WriteLog|RaiseError)\\b"
},
{
	name: "common-data",
	pattern: "\\b(SetCommonData|GetCommonData|ClearCommonData|DeleteCommonData|SetAreaCommonData|GetAreaCommonData|ClearAreaCommonData|DeleteAreaCommonData|CreateCommonDataArea|IsCommonDataAreaExists|CopyCommonDataArea|GetCommonDataAreaKeyList|GetCommonDataValueKeyList|SaveCommonDataAreaA1|LoadCommonDataAreaA1|SaveCommonDataAreaA2|LoadCommonDataAreaA2|SaveCommonDataAreaToReplayFile|LoadCommonDataAreaFromReplayFile)\\b"
},
{
	name: "audio",
	pattern: "\\b(LoadSound|RemoveSound|PlayBGM|PlaySE|StopSound)\\b"
},
{
	name: "input",
	pattern: "\\b(GetVirtualKeyState|SetVirtualKeyState|AddVirtualKey|AddReplayTargetVirtualKey|GetKeyState|GetMouseState|GetMouseX|GetMouseY|GetMouseMoveZ|SetSkipModeKey)\\b"
},
{
	name: "render",
	pattern: "\\b(LoadTexture|LoadTextureInLoadThread|RemoveTexture|GetTextureWidth|GetTextureHeight|SetFogEnable|SetFogParam|ClearInvalidRenderPriority|SetInvalidRenderPriorityA1|GetReservedRenderTargetName|CreateRenderTarget|RenderToTextureA1|RenderToTextureB1|SaveRenderedTextureA1|SaveRenderedTextureA2|SaveSnapShotA1|SaveSnapShotA2|IsPixelShaderSupported|SetShader|SetShaderI|ResetShader|ResetShaderI)\\b"
},
{
	name: "camera.3d",
	pattern: "\\b(SetCameraFocusX|SetCameraFocusY|SetCameraFocusZ|SetCameraFocusXYZ|SetCameraRadius|SetCameraAzimuthAngle|SetCameraElevationAngle|SetCameraYaw|SetCameraPitch|SetCameraRoll|GetCameraX|GetCameraY|GetCameraZ|GetCameraFocusX|GetCameraFocusY|GetCameraFocusZ|GetCameraRadius|GetCameraAzimuthAngle|GetCameraElevationAngle|GetCameraYaw|GetCameraPitch|GetCameraRoll|SetCameraPerspectiveClip)\\b"
},
{
	name: "camera.2d",
	pattern: "\\b(Set2DCameraFocusX|Set2DCameraFocusY|Set2DCameraAngleZ|Set2DCameraRatio|Set2DCameraRatioX|Set2DCameraRatioY|Reset2DCamera|Get2DCameraX|Get2DCameraY|Get2DCameraAngleZ|Get2DCameraRatio|Get2DCameraRatioX|Get2DCameraRatioY)\\b"
},
{
	name: "script",
	pattern: "\\b(LoadScript|LoadScriptInThread|StartScript|CloseScript|IsCloseScript|SetScriptArgument|GetScriptArgument|GetScriptArgumentCount|CloseStgScene|GetOwnScriptID|GetEventType|GetEventArgument|SetScriptResult|GetScriptResult|SetAutoDeleteObject|NotifyEvent|NotifyEventAll|GetScriptInfoA1)\\b"
},
{
	name: "system",
	pattern: "\\b(SetStgFrame|GetScore|AddScore|GetGraze|AddGraze|GetPoint|AddPoint|SetItemRenderPriorityI|SetShotRenderPriorityI|GetStgFrameRenderPriorityMinI|GetStgFrameRenderPriorityMaxI|GetItemRenderPriorityI|GetShotRenderPriorityI|GetPlayerRenderPriorityI|GetCameraFocusPermitPriorityI|GetStgFrameLeft|GetStgFrameTop|GetStgFrameWidth|GetStgFrameHeight|GetScreenWidth|GetScreenHeight|IsReplay|AddArchiveFile)\\b"
},
{
	name: "player",
	pattern: "\\b(GetPlayerObjectID|GetPlayerScriptID|SetPlayerSpeed|SetPlayerClip|SetPlayerLife|SetPlayerSpell|SetPlayerPower|SetPlayerInvincibilityFrame|SetPlayerDownStateFrame|SetPlayerRebirthFrame|SetPlayerRebirthLossFrame|SetPlayerAutoItemCollectLine|SetForbidPlayerShot|SetForbidPlayerSpell|GetPlayerX|GetPlayerY|GetPlayerState|GetPlayerSpeed|GetPlayerClip|GetPlayerLife|GetPlayerSpell|GetPlayerPower|GetPlayerInvincibilityFrame|GetPlayerDownStateFrame|GetPlayerRebirthFrame|GetAngleToPlayer|IsPermitPlayerShot|IsPermitPlayerSpell|IsPlayerLastSpellWait|IsPlayerSpellActive|GetPlayerID|GetPlayerReplayName)\\b"
},
{
	name: "enemy",
	pattern: "\\b(GetEnemyBossSceneObjectID|GetEnemyBossObjectID|GetAllEnemyID|GetIntersectionRegistedEnemyID|GetAllEnemyIntersectionPosition|GetEnemyIntersectionPosition|GetEnemyIntersectionPositionByIdA1|GetEnemyIntersectionPositionByIdA2|LoadEnemyShotData|ReloadEnemyShotData)\\b"
},
{
	name: "shot",
	pattern: "\\b(DeleteShotAll|DeleteShotInCircle|CreateShotA1|CreateShotA2|CreateShotOA1|CreateShotB1|CreateShotB2|CreateShotOB2|CreateLooseLaserA1|CreateStraightLaserA1|CreateCurveLaserA1|SetShotIntersectionCircle|SetShotIntersectionLine|GetShotIdInCircleA1|GetShotIdInCircleA2|GetShotCount|SetShotAutoDeleteClip|GetShotDataInfoA1|StartShotScript)\\b"
},
{
	name: "item",
	pattern: "\\b(CreateItemA1|CreateItemA2|CreateItemU1|CreateItemU2|CollectAllItems|CollectItemsByType|CollectItemsInCircle|CancelCollectItems|StartItemScript|SetDefaultBonusItemEnable|LoadItemData|ReloadItemData)\\b"
},
{
	name: "other",
	pattern: "\\b(StartSlow|StopSlow|IsIntersected_Line_Circle|IsIntersected_Obj_Obj|GetObjectDistance|GetObject2dPosition|Get2dPosition|erase|length|concatenate|slice)\\b"
},
{
	name: "object",
	pattern: "\\b(Obj_Delete|Obj_IsDeleted|Obj_SetVisible|Obj_IsVisible|Obj_SetRenderPriority|Obj_SetRenderPriorityI|Obj_GetRenderPriority|Obj_GetRenderPriorityI|Obj_GetValue|Obj_GetValueD|Obj_SetValue|Obj_DeleteValue|Obj_IsValueExists|Obj_GetType)\\b"
},
{
	name: "object.render",
	pattern: "\\b(ObjRender_SetX|ObjRender_SetY|ObjRender_SetZ|ObjRender_SetPosition|ObjRender_SetAngleX|ObjRender_SetAngleY|ObjRender_SetAngleZ|ObjRender_SetAngleXYZ|ObjRender_SetScaleX|ObjRender_SetScaleY|ObjRender_SetScaleZ|ObjRender_SetScaleXYZ|ObjRender_SetColor|ObjRender_SetColorHSV|ObjRender_SetAlpha|ObjRender_SetBlendType|ObjRender_GetX|ObjRender_GetY|ObjRender_GetZ|ObjRender_GetAngleX|ObjRender_GetAngleY|ObjRender_GetAngleZ|ObjRender_GetScaleX|ObjRender_GetScaleY|ObjRender_GetScaleZ|ObjRender_GetBlendType|ObjRender_SetZWrite|ObjRender_SetZTest|ObjRender_SetFogEnable|ObjRender_SetPermitCamera)\\b"
},
{
	name: "object.primitive",
	pattern: "\\b(ObjPrim_Create|ObjPrim_SetPrimitiveType|ObjPrim_SetVertexCount|ObjPrim_GetVertexCount|ObjPrim_SetTexture|ObjPrim_SetVertexPosition|ObjPrim_GetVertexPosition|ObjPrim_SetVertexUV|ObjPrim_SetVertexUVT|ObjPrim_SetVertexColor|ObjPrim_SetVertexAlpha)\\b"
},
{
	name: "object.2d.sprite",
	pattern: "\\b(ObjSprite2D_SetSourceRect|ObjSprite2D_SetDestRect|ObjSprite2D_SetDestCenter)\\b"
},
{
	name: "object.2d.sprite.list",
	pattern: "\\b(ObjSpriteList2D_SetSourceRect|ObjSpriteList2D_SetDestRect|ObjSpriteList2D_SetDestCenter|ObjSpriteList2D_AddVertex|ObjSpriteList2D_CloseVertex|ObjSpriteList2D_ClearVertexCount)\\b"
},
{
	name: "object.3d.sprite",
	pattern: "\\b(ObjSprite3D_SetSourceRect|ObjSprite3D_SetDestRect|ObjSprite3D_SetSourceDestRect|ObjSprite3D_SetBillboard)\\b"
},
{
	name: "object.mesh",
	pattern: "\\b(ObjMesh_Create|ObjMesh_Load|ObjMesh_SetColor|ObjMesh_SetAlpha|ObjMesh_SetAnimation|ObjMesh_SetCoordinate2D)\\b"
},
{
	name: "object.text",
	pattern: "\\b(ObjText_Create|ObjText_SetText|ObjText_SetFontType|ObjText_SetFontSize|ObjText_SetFontBold|ObjText_SetFontColorTop|ObjText_SetFontColorBottom|ObjText_SetFontBorderWidth|ObjText_SetFontBorderType|ObjText_SetFontBorderColor|ObjText_SetMaxWidth|ObjText_SetMaxHeight|ObjText_SetLinePitch|ObjText_SetSidePitch|ObjText_SetTransCenter|ObjText_SetAutoTransCenter|ObjText_SetHorizontalAlignment|ObjText_SetSyntacticAnalysis|ObjText_GetTextLength|ObjText_GetTextLengthCU|ObjText_GetTextLengthCUL|ObjText_GetTotalWidth|ObjText_GetTotalHeight)\\b"
},
{
	name: "object.shader",
	pattern: "\\b(ObjShader_Create|ObjShader_SetShaderF|ObjShader_SetShaderO|ObjShader_ResetShader|ObjShader_SetTechnique|ObjShader_SetVector|ObjShader_SetFloat|ObjShader_SetFloatArray|ObjShader_SetTexture)\\b"
},
{
	name: "object.sound",
	pattern: "\\b(ObjSound_Create|ObjSound_Load|ObjSound_Play|ObjSound_Stop|ObjSound_SetVolumeRate|ObjSound_SetPanRate|ObjSound_SetFade|ObjSound_SetLoopEnable|ObjSound_SetLoopTime|ObjSound_SetLoopSampleCount|ObjSound_SetRestartEnable|ObjSound_SetSoundDivision|ObjSound_IsPlaying|ObjSound_GetVolumeRate)\\b"
},
{
	name: "object.file",
	pattern: "\\b(ObjFile_Create|ObjFile_Open|ObjFile_OpenNW|ObjFile_Store|ObjFile_GetSize)\\b"
},
{
	name: "object.file.text",
	pattern: "\\b(ObjFileT_GetLineCount|ObjFileT_GetLineText|ObjFileT_SplitLineText|ObjFileT_AddLine|ObjFileT_ClearLine)\\b"
},
{
	name: "object.file.binary",
	pattern: "\\b(ObjFileB_SetByteOrder|ObjFileB_SetCharacterCode|ObjFileB_GetPointer|ObjFileB_Seek|ObjFileB_ReadBoolean|ObjFileB_ReadByte|ObjFileB_ReadShort|ObjFileB_ReadInteger|ObjFileB_ReadLong|ObjFileB_ReadFloat|ObjFileB_ReadDouble|ObjFileB_ReadString)\\b"
},
{
	name: "object.move",
	pattern: "\\b(ObjMove_SetX|ObjMove_SetY|ObjMove_SetPosition|ObjMove_SetSpeed|ObjMove_SetAngle|ObjMove_SetAcceleration|ObjMove_SetMaxSpeed|ObjMove_SetAngularVelocity|ObjMove_SetDestAtSpeed|ObjMove_SetDestAtFrame|ObjMove_SetDestAtWeight|ObjMove_AddPatternA1|ObjMove_AddPatternA2|ObjMove_AddPatternA3|ObjMove_AddPatternA4|ObjMove_AddPatternB1|ObjMove_AddPatternB2|ObjMove_AddPatternB3|ObjMove_GetX|ObjMove_GetY|ObjMove_GetSpeed|ObjMove_GetAngle)\\b"
},
{
	name: "object.enemy",
	pattern: "\\b(ObjEnemy_Create|ObjEnemy_Regist|ObjEnemy_GetInfo|ObjEnemy_SetLife|ObjEnemy_AddLife|ObjEnemy_SetDamageRate|ObjEnemy_SetIntersectionCircleToShot|ObjEnemy_SetIntersectionCircleToPlayer)\\b"
},
{
	name: "object.boss-scene",
	pattern: "\\b(ObjEnemyBossScene_Create|ObjEnemyBossScene_Regist|ObjEnemyBossScene_Add|ObjEnemyBossScene_LoadInThread|ObjEnemyBossScene_GetInfo|ObjEnemyBossScene_SetSpellTimer|ObjEnemyBossScene_StartSpell)\\b"
},
{
	name: "object.shot",
	pattern: "\\b(ObjShot_Create|ObjShot_Regist|ObjShot_SetAutoDelete|ObjShot_FadeDelete|ObjShot_SetDeleteFrame|ObjShot_SetDelay|ObjShot_SetSpellResist|ObjShot_SetGraphic|ObjShot_SetSourceBlendType|ObjShot_SetDamage|ObjShot_SetPenetration|ObjShot_SetEraseShot|ObjShot_SetSpellFactor|ObjShot_ToItem|ObjShot_AddShotA1|ObjShot_AddShotA2|ObjShot_SetIntersectionCircleA1|ObjShot_SetIntersectionCircleA2|ObjShot_SetIntersectionLine|ObjShot_SetIntersectionEnable|ObjShot_SetItemChange|ObjShot_GetDamage|ObjShot_GetPenetration|ObjShot_GetDelay|ObjShot_IsSpellResist|ObjShot_GetImageID|ObjLaser_SetLength|ObjLaser_SetRenderWidth|ObjLaser_SetIntersectionWidth|ObjLaser_SetGrazeInvalidFrame|ObjLaser_SetInvalidLength|ObjLaser_GetLength|ObjStLaser_SetAngle|ObjStLaser_GetAngle|ObjStLaser_SetSource|ObjCrLaser_SetTipDecrement)\\b"
},
{
	name: "object.item",
	pattern: "\\b(ObjItem_SetItemID|ObjItem_SetRenderScoreEnable|ObjItem_SetAutoCollectEnable|ObjItem_SetDefinedMovePatternA1|ObjItem_GetInfo)\\b"
},
{
	name: "object.player",
	pattern: "\\b(ObjPlayer_AddIntersectionCircleA1|ObjPlayer_AddIntersectionCircleA2|ObjPlayer_ClearIntersection)\\b"
},
{
	name: "object.collision",
	pattern: "\\b(ObjCol_IsIntersected|ObjCol_GetListOfIntersectedEnemyID|ObjCol_GetIntersectedCount)\\b"
},
{
	name: "player.main",
	pattern: "\\b(CreatePlayerShotA1|CallSpell|LoadPlayerShotData|ReloadPlayerShotData|GetSpellManageObject)\\b"
},
{
	name: "player.spell",
	pattern: "\\b(ObjSpell_Create|ObjSpell_Regist|ObjSpell_SetDamage|ObjSpell_SetEraseShot|ObjSpell_SetIntersectionCircle|ObjSpell_SetIntersectionLine)\\b"
},
{
	name: "private.system",
	pattern: "\\b(SetPauseScriptPath|SetEndSceneScriptPath|SetReplaySaveSceneScriptPath|GetTransitionRenderTargetName)\\b"
},
{
	name: "private.custom-script",
	pattern: "\\b(SetShotDeleteEventEnable)\\b"
},
{
	name: "private.package",
	pattern: "\\b(ClosePackage|InitializeStageScene|FinalizeStageScene|StartStageScene|SetStageIndex|SetStageMainScript|SetStagePlayerScript|SetStageReplayFile|GetStageSceneState|GetStageSceneResult|PauseStageScene|TerminateStageScene|GetLoadFreePlayerScriptList|GetFreePlayerScriptCount|GetFreePlayerScriptInfo|LoadReplayList|GetValidReplayIndices|IsValidReplayIndex|GetReplayInfo|SetReplayInfo|SaveReplay)\\b"
}];