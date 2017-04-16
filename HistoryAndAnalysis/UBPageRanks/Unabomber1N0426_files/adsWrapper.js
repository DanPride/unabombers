var adsHt="ar.atwola.com",adsD=new Date(),adsTz="&TZ="+adsD.getTimezoneOffset(),adsScr=adsD.getTime()%0x3fffffff,adsNum=1,adsTar='_top',adsExt='aol',adsTp='',adsSL="<SCRIPT LANGUAGE='JavaScript' SRC='"
var adsOld=1,adsNMSG,adsNG,adsNM,adsSr="",adsOt='',adsScat,adsIP=" SCROLLING=NO FRAMEBORDER=0 MARGINHEIGHT=0 MARGINWIDTH=0>"
var adsNv=navigator,adsAN=adsNv.appName,adsAV=parseInt(adsNv.appVersion),adsUA=adsNv.userAgent,adsLNm=0,adsLMN=new Array()
var adsXS="&xlnl=%5cn&xltick=%5c%27&ctype=application/x-javascript'></SCRIPT>"
var adsAH1="<A HREF='http://",adsAH2="/"+adsScr+ "/",adsAH3="' TARGET="+adsTar+">"
var adsI1="<IMG SRC='http://",adsI2="/"+adsScr +"/",adsI3=" BORDER=0 ALT=\"Click Here\"></A>"
var adsIE=(adsAN=="Microsoft Internet Explorer"),adsNS=(adsAN=="Netscape"),adsN4=(adsNS&&adsAV==4),adsN6=(adsNS&&adsAV>=5),adsOp=(adsUA.indexOf("Opera")!=-1)
if (((adsNS||adsIE)&&adsAV>=4)||(adsOp&&adsAV>=5)){adsOld=0
if (adsOp&&adsUA.indexOf("Opera 5")==-1&&adsUA.indexOf("Opera/5")==-1&&adsUA.indexOf("Opera 6")==-1&&adsUA.indexOf("Opera/6")==-1){adsOld=1}}
function adSetRotate(){}
function adSetBucketMN(){}
function adSetHtNm(v){adsHt=escape(v)}
function adSetTarget(v){adsTar=escape(v)}
function adSetNewMedia(v){adsNM=escape(v);adsNMSG=(v!=''?"NM="+adsNM:"")}
function adSetExt(v){adsExt=escape(v)}
function adSetSearch(v){adsSr=(v!=''?"&search="+escape(v):"")}
function adSetType(v){adsTp=v.toUpperCase()}
function adSetOther(v){adsOt=v}
function adSetSearchCat(v){adsScat=v}
function adsCkPlg(){
var e='</',ie=0,vm='{08B0E5C0-4FCB-11CF-AAA5-00401C608500}',dc=document,dl=dc.layers,da=dc.all,dg=dc.getElementById,n=navigator,db=dc.body
var cid='componentid',beh='url(#default#clientCaps)',jO=0,jI=0,ie5=da&&dg,go=(da||dl||(dg&&!da))
if (adsUA.indexOf('MSIE')!=-1&&adsUA.indexOf('Win')!=-1&&!adsOp){ie=1
var d=document.writeln
d('<script language="VBscript">')
d('Dim adsVB')
d('adsVB=0')
d('If ScriptEngineMajorVersion >=2 then')
d('adsVB=1')
d('End If')
d('Function adsAX(activeXname)')
d('on error resume next')
d('If ScriptEngineMajorVersion >=2 then')
d('adsAX=False')
d('adsAX=IsObject(CreateObject(activeXname))')
d('If (err) then')
d('adsAX=False')
d('End If')
d('Else')
d('adsAX=False')
d('End If')
d('End Function')
d(e+'script>')
}
var i,u=0,dF='',dV='',dtB='',fS
if (ie&&window.adsVB){u=0}else{u=1}
var p=n.plugins
if (p){
var l=p.length
if (l>1){var m=n.mimeTypes,fl=m['application/x-shockwave-flash'],v1=m['application/x-mtx']
if (m&&((fl&&fl.enabledPlugin&&(fl.suffixes.indexOf('swf')!=-1))||(v1&&v1.enabledPlugin&&(v1.suffixes.indexOf('mtx')!=-1)))){
var ds,f="Flash ",nm
if (adsNS&&(n.appVersion.indexOf('4.0')!=-1)){
for(i in p){
ds=p[i].description,fS=ds.indexOf(f)
if (fS!=-1){if (ds.substring(fS+6,fS+7)>=4){dF='F'}}
else if (ds.indexOf('MetaStream 3 Plugin')!=-1){dV='V'}}
}else{
for (i=0;i<l;i++){
ds=p[i].description,nm=p[i].name
fS=ds.indexOf(f)
fN=nm.indexOf(f)
if (fS!=-1){if (ds.substring(fS+6,fS+7)>=4){dF='F'}else if (fN!=-1){if (nm.substring(fN+6,fN+7)>=4){dF='F'}}}
else if ((ds.indexOf('MetaStream 3 Plugin')!=-1)||(nm.indexOf('MetaStream 3 Plugin')!=-1)){dV='V'}}}
if (fl==null){dF=''}
if (v1==null){dV=''}}
}else if(ie==1&&!u){if (!ie5||adsOp){fS="ShockwaveFlash.ShockwaveFlash."
dF=(adsAX(fS+"5")?'F':'')
if (!dF){dF=(adsAX(fS+"6")?'F':'')
if (!dF){dF=(adsAX(fS+"4")?'F':'')}}}
dV=(adsAX('AxMetaStream.MetaStreamCtlSecondary')?'V':'')
if (!dV){dV=(adsAX('AxMetaStreamCtl')?'V':'')}
}else{dV='';dF=''}
}else{dV='';dF=''}
if (go){if (n.platform=='Win32'){jO=n.javaEnabled();jI=1
if (ie5&&!adsOp&&(db!=null)){jI=0
db.style.behavior=beh
if(db.isComponentInstalled(vm,cid))jI=1
var fC='{D27CDB6E-AE6D-11CF-96B8-444553540000}',fV=db.getComponentVersion(fC,cid)
if (fV.charAt(0)>=4){dF='F'}}}}
if (jO&&jI){dtB='B'}
if (adsOp){adsNMSG="SNM=I"+dF}else{adsNMSG="SNM=HI"+((!adsN4)?'D':'')+dtB+dF+dV}}
function adsFn1(m,w,h){
var s="<HTML><HEAD>"
s+="<SCRIPT LANGUAGE='JavaScript'>\n"
s+="function adsXz(){\n"
var d="document.adsX1.adsXf1.value"
s+='if ('+d+'=="1"){self.location.reload("true")}\n'
s+="else {"+d+"='1'}\n"
s+="}\n"
s+="</"+"SCRIPT>\n"
s+="<FORM NAME='adsX1'><INPUT TYPE=hidden NAME='adsXf1' VALUE='0'></FORM>\n"
s+="</HEAD>"
s+="<BODY onLoad='adsXz()'>"
s+="<IFRAME SRC='http://"+adsHt+"/html/"+m+"/"+adsScr+"/"+adsExt+"?"+adsNMSG+"&CT=I&width="+w+"&height="+h+"&target="+adsTar+adsTz+adsScS+adsSr+adsOt+"' WIDTH="+w+" HEIGHT="+h+adsIP
s+="</IFRAME></BODY></HTML>"
return s
}
function adsSF(){
if (adsScat&&adsScat!=''){
adsScS="&scat="+escape(adsScat)
}else{adsScS=""}}
function adsWrAd(){document.write(window.adsTop)}
function htmlAdWH(m,w,h,t){adsSF()
var d=document
if (!adsOld){if (!adsNMSG){if (!adsNG){adsCkPlg();adsNG=adsNMSG}else{adsNMSG=adsNG}}
var s="http://"+adsHt+"/html/"+m+"/"+adsScr+"/"+adsExt+"?"+adsNMSG+"&width="+w+"&height="+h+"&target="+adsTar+"&"+adsTz+adsScS+adsSr+adsOt+"&CT="
if (t=='t'){d.write(adsSL+s+"J&htmlpre=adsTop%3d%27&htmlsuf=%27%3badsWrAd%28%29%3b"+adsXS)
}else if(t=='b'){d.write(window.adsTop)}
else{if (adsTp!='J'&&!adsN4){var x="<IFRAME NAME='adsF"+adsNum+"' SRC='"
if (adsUA.indexOf('Mac')==-1&&adsIE){
d.write(x+"javascript:parent.adsFn1("+m+","+w+","+h+")' WIDTH="+w+" HEIGHT="+h+adsIP)
}else{d.write(x+s+"I' WIDTH="+w+" HEIGHT="+h+adsIP)}
adsNum++}
if (adsTp=='L'&&adsN4){adsLMN[adsLNm]=m+":"+w+":"+h+":"+adsLNm
d.write("<ILAYER ID=adsL"+adsLNm+" visibility=hide width="+w+" height="+h+"></ILAYER>")
adsLNm++}else if (adsTp=='J'||(!adsTp&&!adsIE&&!adsN6)){d.write(adsSL+s+"J&htmlpre=document.write%28%27&htmlsuf=%27%29%3b"+adsXS)}
else if(adsTp=='I'&&!adsIE&&!adsN6){d.write(adsAH1+adsHt+"/link/"+m+adsAH2+adsExt+adsAH3)
d.write(adsI1+adsHt+"/image/"+m+adsI2+adsExt+"?"+adsTz+adsScS+adsSr+"' HEIGHT="+h+" WIDTH="+w+adsI3)}
if (adsTp!='J'&&!adsN4){d.write("</IFRAME>")}}}
else if(!(adsNS&&adsAV<=2)){d.write(adsAH1+adsHt+"/link/"+m+adsAH2+adsExt+adsAH3)
d.write(adsI1+adsHt+"/image/"+m+adsI2+adsExt+"?"+adsTz+adsScS+adsSr+"' HEIGHT="+h+" WIDTH="+w+adsI3)}
adsScat=''}
function imageAdWH(m,w,h){adsSF()
document.write(adsAH1+adsHt+"/link/"+m+adsAH2+adsExt+adsAH3)
document.write(adsI1+adsHt+"/image/"+m+adsI2+adsExt+"?"+adsTz+adsScS+adsSr+adsOt+"' HEIGHT="+h+" WIDTH="+w+adsI3)
adsScat=''}
function adsEndFn(){}