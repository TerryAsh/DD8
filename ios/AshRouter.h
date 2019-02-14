//
//  AshRouter.h
//  Ash
//
//  Created by 陈震 on 2019/2/13.
//  Copyright © 2019年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

NS_ASSUME_NONNULL_BEGIN

@interface AshRouter : NSObject<RCTBridgeModule>

- (void)presentChatView;

@end

NS_ASSUME_NONNULL_END
