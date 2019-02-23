import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Login from './components/Login'
import TimeLine from './components/TimeLine'

const Routes = createAppContainer (
  createSwitchNavigator ({
    Login,
    TimeLine
  })
)

export default Routes
