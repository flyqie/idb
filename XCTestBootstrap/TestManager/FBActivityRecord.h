/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import <Foundation/Foundation.h>

@class XCActivityRecord;

NS_ASSUME_NONNULL_BEGIN

/**
 A summary of an activity.
 */
@interface FBActivityRecord : NSObject

@property (nonatomic, copy, readonly) NSData *memoryGraphData;
@property (nonatomic, copy, readonly) NSData *diagnosticReportData;
@property (nonatomic, copy, readonly) NSArray *elementsOfInterest;
@property (nonatomic, copy, readonly) NSData *screenImageData;
@property (nonatomic, assign, readonly) BOOL hasSubactivities;
@property (nonatomic, copy, readonly) NSDate *start;
@property (nonatomic, copy, readonly) NSDate *finish;
@property (nonatomic, copy, readonly) NSUUID *uuid;
@property (nonatomic, copy, readonly) NSString *title;
@property (nonatomic, assign, readonly) double duration;

/**
 Constructs a activity summary from a XCActivityRecord
 */
+ (instancetype)from:(XCActivityRecord *)record;

@end

NS_ASSUME_NONNULL_END
