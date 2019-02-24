import { createSwitchNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import Login from './components/Login'
import TimeLine from './components/TimeLine'
import New from './components/New'

const Routes = createAppContainer (
  createSwitchNavigator ({
    Login,
    App: createStackNavigator({
      TimeLine,
      New
    })
  })
)

export default Routes
