import AuthContent from '../components/Auth/AuthContent';
import { useState } from 'react';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { login } from '../util/auth';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)


  async function loginHandler({email, password}) {
    setIsAuthenticating(true)
    await login(email, password);
    setIsAuthenticating(false)
  }

  if (isAuthenticating) {
    return <LoadingOverlay message='Logging You In... '/>
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
