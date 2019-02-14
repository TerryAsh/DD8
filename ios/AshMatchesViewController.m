//
//  AshMatchesViewController.m
//  Ash
//
//  Created by 陈震 on 2019/2/13.
//  Copyright © 2019年 Facebook. All rights reserved.
//

#import "AshMatchesViewController.h"
#import <FrameAccessor.h>

@interface AshMatchesViewController ()

@property(nonatomic ,strong) UIButton *refreshButton;

@end

@implementation AshMatchesViewController

- (UIButton *)refreshButton{
  if (nil == _refreshButton) {
    _refreshButton = [[UIButton alloc] initWithFrame:CGRectMake(0, 0, self.view.width -30, 45)];
    _refreshButton.center = self.view.center;
    _refreshButton.backgroundColor = [UIColor redColor];
  }
  return _refreshButton;
}

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    [self.view addSubview:self.refreshButton];
  self.view.backgroundColor = [UIColor whiteColor];
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
