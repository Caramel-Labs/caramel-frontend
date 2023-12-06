'use client'

import GetEmail from "@/app/components/(auth)/getEmail"
import VerifyOTP from "@/app/components/(auth)/verifyOtp"
import OtpVerified from "@/app/components/(auth)/otpVerified"
import GetDetails from "@/app/components/(auth)/getDetails"
import WelcomePage from "@/app/components/(auth)/welcomePage"
import SuccessPage from "@/app/components/(auth)/successPage"
import GetCredentials from "@/app/components/(auth)/getCredentials"

import { useFormState } from "@/app/utility/FormContext"

function ActiveStepFormComponent() {
    const { step } = useFormState();
    switch (step) {
      case 1:
        return <GetCredentials/>;
      case 0:
        return <GetEmail/>;
      case 2:
        return <VerifyOTP />;
      case 3:
        return <OtpVerified />;
      case 4:
        return <GetDetails />;
      case 5:
        return <SuccessPage />;
      default:
        return null;
    }
  }

export default function SignUp() {
    return (
        <div >
          <ActiveStepFormComponent />
        </div>
    );
  }