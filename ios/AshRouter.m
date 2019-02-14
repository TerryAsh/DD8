//
//  AshRouter.m
//  Ash
//
//  Created by 陈震 on 2019/2/13.
//  Copyright © 2019年 Facebook. All rights reserved.
//

#import "AshRouter.h"
#import "AshMatchesViewController.h"
#import <UIKit/UIKit.h>
@implementation AshRouter
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(presentChatView){
  AshMatchesViewController *matchVC = [AshMatchesViewController new];
  dispatch_async(dispatch_get_main_queue(), ^{
    UIViewController *rootVC = [UIApplication sharedApplication].keyWindow.rootViewController;
    [rootVC presentViewController:matchVC animated:YES completion:^{
      
    }];
  });
}
@end
