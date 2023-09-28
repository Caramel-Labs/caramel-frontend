'use client'

import VerifyEmail from "@/app/components/(auth)/verifyEmail"
import VerifyOTP from "@/app/components/(auth)/verifyOtp"
import OtpVerified from "@/app/components/(auth)/otpVerified"
import GetDetails from "@/app/components/(auth)/getDetails"

import { useFormState } from "@/app/utility/FormContext"

function ActiveStepFormComponent() {
    const { step } = useFormState();
    switch (step) {
      case 0:
        return <GetDetails/>;
      case 1:
        return <VerifyEmail/>;
      case 2:
        return <VerifyOTP />;
      case 3:
        return <OtpVerified />;
      default:
        return null;
    }
  }

export default function SignUp() {
    return (
        <div >
          <h1 className="text-center text-2xl font-semibold py-4">
            Join Caramel
          </h1>
          <ActiveStepFormComponent />
        </div>
    );
  }