"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[316],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>u});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=a.createContext({}),m=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},c=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=m(i),u=n,h=p["".concat(s,".").concat(u)]||p[u]||d[u]||o;return i?a.createElement(h,r(r({ref:t},c),{},{components:i})):a.createElement(h,r({ref:t},c))}));function u(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var m=2;m<o;m++)r[m]=i[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}p.displayName="MDXCreateElement"},2344:(e,t,i)=>{i.r(t),i.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>m,assets:()=>c,toc:()=>d,default:()=>u});var a=i(3117),n=i(102),o=(i(7294),i(3905)),r=["components"],l={id:"fbsimulatorcontrol",title:"FBSimulatorControl"},s=void 0,m={unversionedId:"fbsimulatorcontrol",id:"fbsimulatorcontrol",title:"FBSimulatorControl",description:"FBSimulatorControl is the macOS Framework that implements all functionality associated with iOS Simulators within idb. It can be used independently of idb as it is a standalone Framework.",source:"@site/docs/fbsimulatorcontrol.mdx",sourceDirName:".",slug:"/fbsimulatorcontrol",permalink:"/docs/fbsimulatorcontrol",tags:[],version:"current",frontMatter:{id:"fbsimulatorcontrol",title:"FBSimulatorControl"},sidebar:"docs",previous:{title:"Commands",permalink:"/docs/commands"},next:{title:"FBDeviceControl",permalink:"/docs/fbdevicecontrol"}},c={},d=[{value:"<code>CoreSimulator.framework</code>",id:"coresimulatorframework",level:2},{value:"<code>simctl</code>",id:"simctl",level:2},{value:"<code>CoreSimulatorService</code>",id:"coresimulatorservice",level:2},{value:"<code>SimRuntime</code>",id:"simruntime",level:2},{value:"<code>launchd_sim</code>",id:"launchd_sim",level:2},{value:"Device Sets",id:"device-sets",level:2},{value:"<code>Simulator.app</code>",id:"simulatorapp",level:2},{value:"Framebuffers via <code>IOSurface</code>",id:"framebuffers-via-iosurface",level:2},{value:"<code>IndigoHID</code>",id:"indigohid",level:2},{value:"<code>SimulatorKit.framework</code>",id:"simulatorkitframework",level:2}],p={toc:d};function u(e){var t=e.components,i=(0,n.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"FBSimulatorControl")," is the macOS Framework that implements all functionality associated with iOS Simulators within ",(0,o.kt)("inlineCode",{parentName:"p"},"idb"),". It can be used independently of ",(0,o.kt)("inlineCode",{parentName:"p"},"idb")," as it is a standalone Framework."),(0,o.kt)("h2",{id:"coresimulatorframework"},(0,o.kt)("inlineCode",{parentName:"h2"},"CoreSimulator.framework")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CoreSimulator")," is the Private Framework that is the interface for most Simulator related functionality on macOS. In previous Xcode versions, ",(0,o.kt)("inlineCode",{parentName:"p"},"CoreSimulator")," was bundled inside of Xcode, but it is now installed at the System level just like ",(0,o.kt)("inlineCode",{parentName:"p"},"MobileDevice.framework"),". It may be upgraded to a newer version as part of the install process of Xcode itself."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CoreSimulator")," is used by Xcode and ",(0,o.kt)("inlineCode",{parentName:"p"},"simctl")," as the Framework used to manipulate Simulators. It has Objective-C classes representing a set of Simulators within a directory (",(0,o.kt)("inlineCode",{parentName:"p"},"SimDeviceSet")," wrapped by ",(0,o.kt)("inlineCode",{parentName:"p"},"FBSimulatorSet"),") and an individual iOS Simulator (",(0,o.kt)("inlineCode",{parentName:"p"},"SimDevice"),", wrapped by ",(0,o.kt)("inlineCode",{parentName:"p"},"FBSimulator"),'). There is also a Class that behaves a lot like an "entrypoint" to the Framework in ',(0,o.kt)("inlineCode",{parentName:"p"},"SimServiceContext"),", this performs initialization of external services and is aware of the various configurations of Simulators that are availabile."),(0,o.kt)("h2",{id:"simctl"},(0,o.kt)("inlineCode",{parentName:"h2"},"simctl")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"simctl")," is essentially a CLI that exposes iOS Simulator functionality by linking and using ",(0,o.kt)("inlineCode",{parentName:"p"},"CoreSimulator"),". This binary is bundled inside of Xcode, and typically addressed via usage of the ",(0,o.kt)("inlineCode",{parentName:"p"},"xcrun")," command. ",(0,o.kt)("inlineCode",{parentName:"p"},"xcrun")," is essentially a trampoline that addresses binaries that are bundled within Xcode by using the value defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"xcode-select")),(0,o.kt)("p",null,"The overwhelming majority of Simulator functionality is not implemented in ",(0,o.kt)("inlineCode",{parentName:"p"},"simctl"),", it is implemented within ",(0,o.kt)("inlineCode",{parentName:"p"},"CoreSimulator")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"simctl")," providing an accessible way of using this functionality. Having this behaviour implemented at the Framework level so that ",(0,o.kt)("inlineCode",{parentName:"p"},"Simulator.app")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"simctl")," behave identically when using their user interfaces."),(0,o.kt)("h2",{id:"coresimulatorservice"},(0,o.kt)("inlineCode",{parentName:"h2"},"CoreSimulatorService")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CoreSimulatorService")," is a user-level daemon that is bootstrapped by any usage of ",(0,o.kt)("inlineCode",{parentName:"p"},"SimServiceContext"),", effectively any usage of iOS Simulators will cause this service to be created and launched. This is an XPC service contained within the ",(0,o.kt)("inlineCode",{parentName:"p"},"CoreSimulator.framework")," bundle. This service is responsible for starting and managing Simulators."),(0,o.kt)("p",null,"When using ",(0,o.kt)("inlineCode",{parentName:"p"},"CoreSimulator")," as a client Framework it will transparently communicate with ",(0,o.kt)("inlineCode",{parentName:"p"},"CoreSimulatorService"),". The overwhelming majority of ",(0,o.kt)("inlineCode",{parentName:"p"},"CoreSimulator")," APIs that do meaningful work are essentially performing IO to ",(0,o.kt)("inlineCode",{parentName:"p"},"CoreSimulatorService"),", though the asynchronous nature of this work isn't completely consistent. Some ",(0,o.kt)("inlineCode",{parentName:"p"},"CoreSimulator")," APIs (for instance those associated with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/idb/blob/main/PrivateHeaders/CoreSimulator/SimDevice.h#L75"},"launching an iOS Application"),") do have asynchronous methods, but others (such as the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/idb/blob/main/PrivateHeaders/CoreSimulator/SimServiceContext.h#L26"},"instantiation of a ",(0,o.kt)("inlineCode",{parentName:"a"},"SimServiceContext")),") do not. ",(0,o.kt)("inlineCode",{parentName:"p"},"CoreSimulatorService")," still gets much of it's implementation from ",(0,o.kt)("inlineCode",{parentName:"p"},"CoreSimulator.framework"),", touching different areas of the API."),(0,o.kt)("p",null,'Having the "work" of iOS Simulators performed within the context of share user daemon is likely due to the needs to synchronize and consolidate state. The service is also an effective caching mechanism for runtime and device profiles. There are a few downsides to this approach. Firstly, ',(0,o.kt)("inlineCode",{parentName:"p"},"CoreSimulatorService")," is effectively a single point of failure. If ",(0,o.kt)("inlineCode",{parentName:"p"},"CoreSimulatorService")," becomes stuck, or a client of ",(0,o.kt)("inlineCode",{parentName:"p"},"CoreSimulator")," exhibits pathological behaviour, then all iOS Simulator functionality on a given host will fail. iOS Simulator functionality will effectively halt until ",(0,o.kt)("inlineCode",{parentName:"p"},"CoreSimulatorService")," restarts, either by the hung ",(0,o.kt)("inlineCode",{parentName:"p"},"CoreSimulatorService")," terminating and restarting or via reboot."),(0,o.kt)("p",null,"Secondly, the lifecycle of ",(0,o.kt)("inlineCode",{parentName:"p"},"CoreSimulatorService")," is tied to that of the selected ",(0,o.kt)("inlineCode",{parentName:"p"},"Xcode"),". This means that different versions of Xcode cannot be used concurrently on the same host; ",(0,o.kt)("inlineCode",{parentName:"p"},"CoreSimulatorService")," can only be aware of a single Xcode at any point in time. Switching Xcodes and fetching a new ",(0,o.kt)("inlineCode",{parentName:"p"},"CoreSimulatorService")," (for instance via a ",(0,o.kt)("inlineCode",{parentName:"p"},"simctl")," command) will cause ",(0,o.kt)("inlineCode",{parentName:"p"},"CoreSimulatorService")," to restart, disconnecting existing clients and killing booted Simulators."),(0,o.kt)("h2",{id:"simruntime"},(0,o.kt)("inlineCode",{parentName:"h2"},"SimRuntime")),(0,o.kt)("p",null,"An iOS Simulator Runtime is all of the required components for running an iOS Simulator of a given iOS version. This is a bundle, where the contents closely match the makeup of the files on disk on a physical device. This includes binaries that are compiled for the host architecture (x86_64 in the case of Intel Macs, ARM64 in the case of ARM based Macs) as well as Frameworks. The Frameworks within a SimRuntime match those of iOS, instead of those of the macOS host. There are often subtle differences in the iOS and macOS APIs, even within the same Framework. A single ",(0,o.kt)("inlineCode",{parentName:"p"},"SimRuntime")," represents a single iOS version."),(0,o.kt)("p",null,"Each version of Xcode is bundled with ",(0,o.kt)("inlineCode",{parentName:"p"},"SimRuntime"),'s for the most recent iOS version that is relevant for the Xcode version across iOS, tvOS and watchOS. However, additional iOS Versions can be supported on a given version of Xcode via the "Components" section within ',(0,o.kt)("inlineCode",{parentName:"p"},"Xcode.app"),". These bundles are then installed into ",(0,o.kt)("inlineCode",{parentName:"p"},"/Library/Developer/CoreSimulator/Profiles/Runtimes")," on the host system. Runtime bundles are backwards, but not forwards compatible. For example, Xcode 11 has support for iOS 13 (the latest iOS version associated with this Xcode version) and earlier versions of iOS, but not for iOS 14."),(0,o.kt)("h2",{id:"launchd_sim"},(0,o.kt)("inlineCode",{parentName:"h2"},"launchd_sim")),(0,o.kt)("p",null,"iOS, like macOS has ",(0,o.kt)("inlineCode",{parentName:"p"},"launchd"),' as it\'s "root process" (often PID 1). However, iOS Simulators have their own version of ',(0,o.kt)("inlineCode",{parentName:"p"},"launchd")," as a root process. This ",(0,o.kt)("inlineCode",{parentName:"p"},"launchd_sim"),' is effectively the "root process" of the iOS Simulator runtime, but not of the macOS host. This ',(0,o.kt)("inlineCode",{parentName:"p"},"launchd_sim")," is required by the Simulator OS in order to launch Applications, manage services etc. Each launched iOS Simulator has it's own ",(0,o.kt)("inlineCode",{parentName:"p"},"launchd_sim")," process, launched from the ",(0,o.kt)("inlineCode",{parentName:"p"},"launchd_sim")," within the ",(0,o.kt)("inlineCode",{parentName:"p"},"SimRuntime"),". This also means that processes within this nested ",(0,o.kt)("inlineCode",{parentName:"p"},"launchd")," will only see the processes of the iOS Simulator, rather than all of those of the entire host (including other iOS Simulators running on the same host)."),(0,o.kt)("p",null,"This ",(0,o.kt)("inlineCode",{parentName:"p"},"launchd_sim")," can be interrogated the same as the ",(0,o.kt)("inlineCode",{parentName:"p"},"launchd")," of the host, provided that the ",(0,o.kt)("inlineCode",{parentName:"p"},"launchctl")," called is spawned within the ",(0,o.kt)("inlineCode",{parentName:"p"},"launchd_sim")," of the iOS Simulator."),(0,o.kt)("h2",{id:"device-sets"},"Device Sets"),(0,o.kt)("p",null,'A Device Set is essentially a directory that contains a number of created iOS Simulators. The "Default Device Set" is located at ',(0,o.kt)("inlineCode",{parentName:"p"},"~/Library/Developer/CoreSimulator/Devices"),", this is the device set that is used by ",(0,o.kt)("inlineCode",{parentName:"p"},"Xcode.app"),"."),(0,o.kt)("p",null,"Custom device sets can be placed at any location on disk. This is useful for isolating the filesystems of created iOS Simulators from each other. For instance, if there are independent processes managing iOS Simulators on the same host it can be worthwhile having each of these processes manage their own device sets to prevent data races."),(0,o.kt)("p",null,"There is also an ",(0,o.kt)("inlineCode",{parentName:"p"},"XCTestDevices")," directory at ",(0,o.kt)("inlineCode",{parentName:"p"},"~/Library/Developer/XCTestDevices"),". This is the set of Simulators that are used by ",(0,o.kt)("inlineCode",{parentName:"p"},"xcodebuild"),", distinct from the user interface. This means that ",(0,o.kt)("inlineCode",{parentName:"p"},"xcodebuild")," can manage and use it's own set of iOS Simulators, independent of the Xcode UI. This may exist for a similar reasons to why custom device sets are practical for automation scenarios. It would also be a confusing user experience if an iOS Simulator that was being used within ",(0,o.kt)("inlineCode",{parentName:"p"},"xcodebuild")," was using an iOS Simulator that a user was using via Xcode when running UI Tests."),(0,o.kt)("h2",{id:"simulatorapp"},(0,o.kt)("inlineCode",{parentName:"h2"},"Simulator.app")),(0,o.kt)("p",null,'This is the "Simulator" Application with which most developers will be familiar with. This Application effectively mirrors the state of launched iOS Simulators within ',(0,o.kt)("inlineCode",{parentName:"p"},"CoreSimulatorService"),". It is not an essential part of booting and managing iOS Simulators; iOS Simulators can be booted and used without a ",(0,o.kt)("inlineCode",{parentName:"p"},"Simulator.app")," launched for it. This makes using Simulators more practical in automation scenarios where a running macOS Application representing the iOS Simulator is not important or even desirable."),(0,o.kt)("p",null,'The Simulator Application will default to showing all iOS Simulators that are within the "Default Device Set". This means that booted iOS Simulators within "Custom Device Sets" will not be displayed within ',(0,o.kt)("inlineCode",{parentName:"p"},"Simulator.app"),"."),(0,o.kt)("p",null,"The functionality within this Application is largely implemented within ",(0,o.kt)("inlineCode",{parentName:"p"},"CoreSimulator.framework")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"SimulatorKit.framework"),", with the UI implemented directly within the application itself."),(0,o.kt)("h2",{id:"framebuffers-via-iosurface"},"Framebuffers via ",(0,o.kt)("inlineCode",{parentName:"h2"},"IOSurface")),(0,o.kt)("p",null,"The screen from an iOS Simulator is rendered, regardless of whether there is an iOS Simulator application that is presenting this within a IO. An iOS Simulator can be launched independently of ",(0,o.kt)("inlineCode",{parentName:"p"},"Simulator.app"),", since Simulators are kept alive by ",(0,o.kt)("inlineCode",{parentName:"p"},"CoreSimulatorService"),"."),(0,o.kt)("p",null,"In order for other Applications (mainly ",(0,o.kt)("inlineCode",{parentName:"p"},"Simulator.app"),", but also for video recording within ",(0,o.kt)("inlineCode",{parentName:"p"},"simctl"),") to get the iOS Simulator's Framebuffer for rendering, ",(0,o.kt)("inlineCode",{parentName:"p"},"CoreSimulator")," can access the ",(0,o.kt)("inlineCode",{parentName:"p"},"IOSurface")," of the screen of an iOS Simulator. A Simulator can have many screens, for instance when Simulating CarPlay and the main screen at the same time."),(0,o.kt)("p",null,"An ",(0,o.kt)("inlineCode",{parentName:"p"},"IOSurface")," is an object that wraps a Framebuffer, with the contents of the Framebuffer being located within GPU memory. This ",(0,o.kt)("inlineCode",{parentName:"p"},"IOSurface")," can be read and inspected across process boundaries. The iOS Simulator uses this ",(0,o.kt)("inlineCode",{parentName:"p"},"IOSurface")," as the backing Framebuffer for it's view of an iOS Simulator."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"IOSurface")," objects are also easily convertable to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/idb/blob/d587458fa2188fbcdd3f71fcbb2a131903cfa5f2/FBSimulatorControl/Framebuffer/FBSimulatorVideoStream.m#L398"},'"Pixel Buffer" types that are used in video encoding'),". This allows ",(0,o.kt)("inlineCode",{parentName:"p"},"FBSimulatorControl")," to implement video encoding of an iOS Simulator's Framebuffer in a way that avoids large copies of bitmap framebuffers on a per-frame basis."),(0,o.kt)("h2",{id:"indigohid"},(0,o.kt)("inlineCode",{parentName:"h2"},"IndigoHID")),(0,o.kt)("p",null,'"Indigo" is a service present in the iOS Simulator that is used inside ',(0,o.kt)("inlineCode",{parentName:"p"},"Simulator.app"),' to synthesize "Input Events" that are understood within the iOS Simulator. This service is how clicking on the UI of the ',(0,o.kt)("inlineCode",{parentName:"p"},"Simulator.app")," translate into touches within the iOS Simulator."),(0,o.kt)("p",null,'This uses "mach" IPC, where data structures are sent over a channel using ',(0,o.kt)("inlineCode",{parentName:"p"},"mach_msg_send"),'. These data structures are defined through the "Mach Interface Generator", which get compiled out of the ',(0,o.kt)("inlineCode",{parentName:"p"},"Simulator.app")," binary. As such, ",(0,o.kt)("inlineCode",{parentName:"p"},"FBSimulatorControl"),"'s understanding of the layout and values in these data structures ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/idb/blob/main/PrivateHeaders/SimulatorApp/Indigo.h#L40"},"are understood through reverse engineering"),"."),(0,o.kt)("p",null,"The reverse engineering of this protocol, allows ",(0,o.kt)("inlineCode",{parentName:"p"},"FBSimulatorControl")," to expose APIs that allow sending of touch events directly to the iOS Simulator without using Accessibility APIs in a UI Test. The combination of video streams and APIs for sending input events allows for the building of applications that expose a remote iOS Simulator."),(0,o.kt)("h2",{id:"simulatorkitframework"},(0,o.kt)("inlineCode",{parentName:"h2"},"SimulatorKit.framework")),(0,o.kt)("p",null,"This is another macOS Framework that is used in iOS Simulator management. This Framework is not installed to the System, it is bundled within Xcode. Instead, this Framework is more used to implement functionality within ",(0,o.kt)("inlineCode",{parentName:"p"},"Simulator.app"),"."),(0,o.kt)("p",null,"For example, this Framework contains some of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Indigo")," client functionality for sending input events."))}u.isMDXComponent=!0}}]);