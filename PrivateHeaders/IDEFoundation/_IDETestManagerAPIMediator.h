/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import <DVTFoundation/_IDETestResultsProcessor.h>
#import <DVTFoundation/CDStructures.h>

@class DTXConnection, DVTDisallowFinishToken, DVTObservingToken, IDEConsoleAdaptor, NSArray, NSDateFormatter, NSMutableArray, NSMutableDictionary, NSMutableSet, NSMutableString, NSOutputStream, NSString, NSTimer;
@protocol XCTestDriverInterface, XCTestManager_DaemonConnectionInterface;
@interface _IDETestManagerAPIMediator : _IDETestResultsProcessor
{
    BOOL _testPlanDidStartExecuting;
    BOOL _hasFailed;
    BOOL _readyForTestBundleToConnect;
    BOOL _loggingFromTarget;
    BOOL _targetIsiOSSimulator;
    BOOL _testingIsFinished;
    DTXConnection *_connection;
//    id <XCTestDriverInterface> _testBundleProxy;
    long long _testProtocolVersion;
    DTXConnection *_daemonConnection;
//    id <XCTestManager_DaemonConnectionInterface> _daemonProxy;
    long long _daemonProtocolVersion;
    NSTimer *_startupTimeoutTimer;
    DVTObservingToken *_launchSessionStartObserverToken;
    DVTObservingToken *_launchSessionHasCrashedObserverToken;
    DVTObservingToken *_runOperationCancellationObservationToken;
    DVTObservingToken *_runOperationErrorObservationToken;
    DVTObservingToken *_launchSessionAlertErrorObserverToken;
    DVTObservingToken *_debuggerPausedObserverToken;
    DVTDisallowFinishToken *_disallowFinishToken;
    DVTObservingToken *_launchSessionsConsoleAdaptorsObserverToken;
    NSMutableString *_consoleBuffer;
    NSMutableArray *_consoleChunkQueue;
    NSMutableArray *_delegateBlockQueue;
    IDEConsoleAdaptor *_consoleAdaptor;
    NSArray *_finalCommandLineArguments;
    NSOutputStream *_statusStream;
    NSObject<OS_dispatch_queue> *_statusStreamQueue;
    NSString *_statusLogPath;
    NSDateFormatter *_loggingDateFormatter;
    NSString *_unprocessedConsoleOutput;
    NSObject<OS_dispatch_source> *_acceptSource;
    NSTimer *_delegateBlockQueueTimeoutTimer;
    NSMutableDictionary *_testTokensToExecutionTrackers;
    NSMutableDictionary *_testTokensToLaunchSessions;
    NSMutableSet *_executionTrackerObservationTokens;
}

+ (BOOL)supportsInvalidationPrevention;
@property(retain) NSMutableSet *executionTrackerObservationTokens; // @synthesize executionTrackerObservationTokens=_executionTrackerObservationTokens;
@property(retain) NSMutableDictionary *testTokensToLaunchSessions; // @synthesize testTokensToLaunchSessions=_testTokensToLaunchSessions;
@property(retain) NSMutableDictionary *testTokensToExecutionTrackers; // @synthesize testTokensToExecutionTrackers=_testTokensToExecutionTrackers;
@property BOOL testingIsFinished; // @synthesize testingIsFinished=_testingIsFinished;
@property(retain, nonatomic) NSTimer *delegateBlockQueueTimeoutTimer; // @synthesize delegateBlockQueueTimeoutTimer=_delegateBlockQueueTimeoutTimer;
@property(retain) NSObject<OS_dispatch_source> *acceptSource; // @synthesize acceptSource=_acceptSource;
@property BOOL targetIsiOSSimulator; // @synthesize targetIsiOSSimulator=_targetIsiOSSimulator;
@property(retain) NSString *unprocessedConsoleOutput; // @synthesize unprocessedConsoleOutput=_unprocessedConsoleOutput;
@property BOOL loggingFromTarget; // @synthesize loggingFromTarget=_loggingFromTarget;
@property(retain) NSDateFormatter *loggingDateFormatter; // @synthesize loggingDateFormatter=_loggingDateFormatter;
@property(retain) NSString *statusLogPath; // @synthesize statusLogPath=_statusLogPath;
@property(retain) NSObject<OS_dispatch_queue> *statusStreamQueue; // @synthesize statusStreamQueue=_statusStreamQueue;
@property(retain) NSOutputStream *statusStream; // @synthesize statusStream=_statusStream;
@property(retain) NSArray *finalCommandLineArguments; // @synthesize finalCommandLineArguments=_finalCommandLineArguments;
@property(retain, nonatomic) IDEConsoleAdaptor *consoleAdaptor; // @synthesize consoleAdaptor=_consoleAdaptor;
@property(retain) NSMutableArray *delegateBlockQueue; // @synthesize delegateBlockQueue=_delegateBlockQueue;
@property(retain) NSMutableArray *consoleChunkQueue; // @synthesize consoleChunkQueue=_consoleChunkQueue;
@property(retain) NSMutableString *consoleBuffer; // @synthesize consoleBuffer=_consoleBuffer;
@property(retain) DVTObservingToken *launchSessionsConsoleAdaptorsObserverToken; // @synthesize launchSessionsConsoleAdaptorsObserverToken=_launchSessionsConsoleAdaptorsObserverToken;
@property(retain) DVTDisallowFinishToken *disallowFinishToken; // @synthesize disallowFinishToken=_disallowFinishToken;
@property BOOL readyForTestBundleToConnect; // @synthesize readyForTestBundleToConnect=_readyForTestBundleToConnect;
@property BOOL hasFailed; // @synthesize hasFailed=_hasFailed;
@property BOOL testPlanDidStartExecuting; // @synthesize testPlanDidStartExecuting=_testPlanDidStartExecuting;
@property(retain) DVTObservingToken *debuggerPausedObserverToken; // @synthesize debuggerPausedObserverToken=_debuggerPausedObserverToken;
@property(retain) DVTObservingToken *launchSessionAlertErrorObserverToken; // @synthesize launchSessionAlertErrorObserverToken=_launchSessionAlertErrorObserverToken;
@property(retain) DVTObservingToken *runOperationErrorObservationToken; // @synthesize runOperationErrorObservationToken=_runOperationErrorObservationToken;
@property(retain) DVTObservingToken *runOperationCancellationObservationToken; // @synthesize runOperationCancellationObservationToken=_runOperationCancellationObservationToken;
@property(retain) DVTObservingToken *launchSessionHasCrashedObserverToken; // @synthesize launchSessionHasCrashedObserverToken=_launchSessionHasCrashedObserverToken;
@property(retain) DVTObservingToken *launchSessionStartObserverToken; // @synthesize launchSessionStartObserverToken=_launchSessionStartObserverToken;
@property(retain) NSTimer *startupTimeoutTimer; // @synthesize startupTimeoutTimer=_startupTimeoutTimer;
@property long long daemonProtocolVersion; // @synthesize daemonProtocolVersion=_daemonProtocolVersion;
@property(retain) id <XCTestManager_DaemonConnectionInterface> daemonProxy; // @synthesize daemonProxy=_daemonProxy;
@property(retain) DTXConnection *daemonConnection; // @synthesize daemonConnection=_daemonConnection;
@property long long testProtocolVersion; // @synthesize testProtocolVersion=_testProtocolVersion;
@property(retain) id <XCTestDriverInterface> testBundleProxy; // @synthesize testBundleProxy=_testBundleProxy;
@property(retain) DTXConnection *connection; // @synthesize connection=_connection;

- (id)_XCT_testCase:(id)arg1 method:(id)arg2 didFinishActivity:(id)arg3;
- (id)_XCT_testCase:(id)arg1 method:(id)arg2 willStartActivity:(id)arg3;
- (id)_XCT_recordedEventNames:(id)arg1 timestamp:(id)arg2 duration:(id)arg3 startLocation:(id)arg4 startElementSnapshot:(id)arg5 startApplicationSnapshot:(id)arg6 endLocation:(id)arg7 endElementSnapshot:(id)arg8 endApplicationSnapshot:(id)arg9;
- (id)_XCT_nativeFocusItemDidChangeAtTime:(id)arg1 parameterSnapshot:(id)arg2 applicationSnapshot:(id)arg3;
- (id)_XCT_exchangeCurrentProtocolVersion:(id)arg1 minimumVersion:(id)arg2;
- (id)_XCT_recordedFirstResponderChangedWithApplicationSnapshot:(id)arg1;
- (id)_XCT_recordedOrientationChange:(id)arg1;
- (id)_XCT_recordedEventNames:(id)arg1 duration:(id)arg2 startElementID:(id)arg3 startApplicationSnapshot:(id)arg4 endElementID:(id)arg5 endApplicationSnapshot:(id)arg6;
- (id)_XCT_recordedEventNames:(id)arg1 duration:(id)arg2 startElement:(id)arg3 startApplicationSnapshot:(id)arg4 endElement:(id)arg5 endApplicationSnapshot:(id)arg6;
- (id)_XCT_recordedEventName:(id)arg1 duration:(id)arg2 startApplicationSnapshot:(id)arg3 endApplicationSnapshot:(id)arg4;
- (id)_XCT_recordedEventNames:(id)arg1 duration:(id)arg2 startLocation:(id)arg3 startElementSnapshot:(id)arg4 startApplicationSnapshot:(id)arg5 endLocation:(id)arg6 endElementSnapshot:(id)arg7 endApplicationSnapshot:(id)arg8;
- (id)_XCT_recordedEvent:(id)arg1 targetElementID:(id)arg2 applicationSnapshot:(id)arg3;
- (id)_XCT_recordedEvent:(id)arg1 forElement:(id)arg2;
- (id)_XCT_recordedKeyEventsWithApplicationSnapshot:(id)arg1 characters:(id)arg2 charactersIgnoringModifiers:(id)arg3 modifierFlags:(id)arg4;
- (id)_XCT_recordedKeyEventsWithCharacters:(id)arg1 charactersIgnoringModifiers:(id)arg2 modifierFlags:(id)arg3;
- (id)_XCT_terminateProcess:(id)arg1;
- (id)_XCT_getProgressForLaunch:(id)arg1;
- (id)_XCT_launchProcessWithPath:(id)arg1 bundleID:(id)arg2 arguments:(id)arg3 environmentVariables:(id)arg4;
- (id)_launchSessionForProcessWithPath:(id)arg1 bundleID:(id)arg2 arguments:(id)arg3 environmentVariables:(id)arg4;
- (id)_XCT_logDebugMessage:(id)arg1;
- (id)_XCT_logMessage:(id)arg1;
- (id)_XCT_testSuite:(id)arg1 didFinishAt:(id)arg2 runCount:(id)arg3 withFailures:(id)arg4 unexpected:(id)arg5 testDuration:(id)arg6 totalDuration:(id)arg7;
- (id)_XCT_testCaseDidFinishForTestClass:(id)arg1 method:(id)arg2 withStatus:(id)arg3 duration:(id)arg4;
- (id)_XCT_testMethod:(id)arg1 ofClass:(id)arg2 didMeasureMetric:(id)arg3 file:(id)arg4 line:(id)arg5;
- (id)_XCT_testCase:(id)arg1 method:(id)arg2 didStallOnMainThreadInFile:(id)arg3 line:(id)arg4;
- (id)_XCT_testCaseDidFailForTestClass:(id)arg1 method:(id)arg2 withMessage:(id)arg3 file:(id)arg4 line:(id)arg5;
- (id)_XCT_testCaseDidStartForTestClass:(id)arg1 method:(id)arg2;
- (id)_XCT_testSuite:(id)arg1 didStartAt:(id)arg2;
- (id)_XCT_didFinishExecutingTestPlan;
- (id)_XCT_didBeginExecutingTestPlan;
- (id)_XCT_testBundleReadyWithProtocolVersion:(id)arg1 minimumVersion:(id)arg2;
- (BOOL)validateEvent:(int)arg1;
- (void)_enqueueDelegateBlock:(CDUnknownBlockType)arg1;
- (void)_executeDelegateBlockWithNextConsoleChunk:(CDUnknownBlockType)arg1;
- (void)_considerDispatchingDelegateBlock;
- (void)_flushDelegateBlockQueue;
- (void)_delegateBlockQueueTimeoutTimerFired;
- (void)_considerFlushingDelegateBlockQueue;
- (id)parseConsoleOutputFromOriginalOutput:(id)arg1;
- (void)_finishWithError:(id)arg1 didCancel:(BOOL)arg2;
- (void)_detectAndMessageTrace_r17733855_fromError:(id)arg1;
- (void)_reportStartupProgress:(id)arg1 withTimeoutInterval:(double)arg2;
- (void)_startupTimedOut:(id)arg1;
- (void)_logAtLevel:(int)arg1 message:(NSString *)arg2, ... NS_FORMAT_FUNCTION(2,3);
- (void)_logMessage:(id)arg1 fromTarget:(BOOL)arg2;
- (void)_handleUnexpectedFailureDuringTestExecution:(id)arg1;
- (void)_reportStartupFailure:(id)arg1 errorCode:(unsigned long long)arg2;
- (void)_waitForTestProcessToConnect;
- (void)_waitForLaunch;
- (void)_handleDaemonConnection:(id)arg1;
- (double)_defaultTimeoutInterval;
- (void)_checkUITestingPermissionsForPID:(int)arg1;
- (void)_setXcodeUITestingAgentAsResponsibleProcessForPID:(int)arg1;
- (void)_whitelistTestProcessIDForUITesting;
- (void)_setupTestBundleConnectionWithTransport:(id)arg1;
- (BOOL)_setupTransportForUDSAtPath:(id)arg1 errorMessage:(id *)arg2;
- (void)_setupObserversForTestOperation:(id)arg1;
- (void)_prepareStatusLoggingStream;
- (id)initWithTestRunOperation:(id)arg1 forTestRunner:(id)arg2;
- (void)primitiveInvalidate;

@end

