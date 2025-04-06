// app/signup/page.js
import SignupForm from './SignupForm';

export default function SignupPage() {
  return (
    <div style={{ maxWidth: '400px', margin: 'auto', paddingTop: '4rem' }}>
      <h1 style={{fontSize:"30px"}}>Sign Up</h1>
      <SignupForm />
    </div>
  );
}
