import {
  CommonActions,
  DrawerActions,
  StackActions,
} from '@react-navigation/native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {NavigationRefType} from 'src/Types/navigations';

class NavigationServices {
  instance: NavigationRefType = null;

  constructor() {
    this.setInstance = this.setInstance.bind(this);
    this.getInstance = this.getInstance.bind(this);
    this.navigate = this.navigate.bind(this);
    this.push = this.push.bind(this);
    this.pop = this.pop.bind(this);
    this.popToTop = this.popToTop.bind(this);
    this.getCurrentRoute = this.getCurrentRoute.bind(this);
    this.reset = this.reset.bind(this);
  }

  setInstance(instance: NavigationRefType) {
    this.instance = instance;
  }

  navigate(name: string, params?: any) {
    this.instance?.dispatch(CommonActions.navigate(name, params));
  }

  replace(name: string, params?: any) {
    this.instance?.dispatch(StackActions.replace(name, params));
  }

  push(name: string, options: NativeStackNavigationOptions) {
    const pushAction = StackActions.push(name, options);
    this.instance?.dispatch(pushAction);
  }

  popToTop(callback: () => void) {
    const instanceState = this.instance?.getState();
    if (instanceState && instanceState?.index > 0) {
      const pushActions = StackActions.popToTop();
      this.instance?.dispatch(pushActions);
    }

    if (typeof callback === 'function') {
      callback();
    }
  }

  pop(n?: number, data?: any) {
    if (this.instance) {
      if (typeof n === 'number') {
        const actions = StackActions.pop(n);
        this.instance.dispatch(actions);
      } else {
        if (data) {
          this.instance.dispatch(CommonActions.goBack());
          this.instance.dispatch(
            CommonActions.setParams({
              params: data,
            }),
          );
        } else {
          this.instance.goBack();
        }
      }
    }
  }

  reset(name: string, params?: any) {
    const resetAction = CommonActions.reset({
      index: 0,
      routes: [{name, params}],
    });
    this.instance?.dispatch(resetAction);
  }

  setParams(params: object) {
    if (this.instance) {
      this.instance.dispatch(CommonActions.setParams(params));
    }
  }

  getCurrentRoute() {
    if (this.instance) {
      return this.instance.getCurrentRoute();
    }

    return undefined;
  }

  getInstance() {
    if (this.instance) {
      return this.instance;
    }

    return undefined;
  }

  openDrawer() {
    if (this.instance) {
      this.instance.dispatch(DrawerActions.openDrawer());
    }
  }

  closeDrawer() {
    if (this.instance) {
      this.instance.dispatch(DrawerActions.closeDrawer());
    }
  }

  toggleDrawer() {
    if (this.instance) {
      this.instance.dispatch(DrawerActions.toggleDrawer());
    }
  }
}

export default new NavigationServices();
