import Button from "@/components/Button/Index";
import Layout from "@/components/Layout";
import { getErrorMsg } from "@/helpers";
import axios, { AxiosError } from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, {  useState } from "react";

export default function Signup() {
    const [data, setData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [validationErrors, setValidationErrors] = useState([]);
    const [submitError, setSubmitError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const validateData = () => {
        const err = [];
        if (data.fullName?.length < 4) {
            err.push({
                fullName: "Full name must be atleast 4 characters long",
            });
        } else if (data.fullName?.length > 30) {
            err.push({ fullName: "Full name must be less than 30 characters" });
        } else if (data.password?.length < 6) {
            err.push({
                password: "Password must be atleast 6 characters long",
            });
        } else if (data.password !== data.confirmPassword) {
            err.push({ confirmPassword: "Password don't match" });
        }
        setValidationErrors(err);
        if (err.length > 0) {
            return false;
        } else {
            return true;
        }
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        const isValid = validateData();
        if (isValid) {
            try {
                setLoading(true);
                const apiRes = await axios(proces.data.env.MONGODB_URI, data);
                if (apiRes?.data?.success) {
                }
            } catch (error) {
                if (error instanceof AxiosError) {
                    const errorMsg = error.response?.data?.error;
                    setSubmitError(errorMsg);
                }
            }
            setLoading(false);
        }
    };
    const handleInputChange = (e) => {
        // We get property name from event.target.name and set the value from onChange in it
        // So name in our input component should be same as the property in data state

        setData({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={handleSignUp}>
            <h1> Sign Up </h1>
            <input
                type="text"
                placeholder={"Full Name"}
                value={data.fullName}
                name="fullName"
                onChange={handleInputChange}
                required
                error={getErrorMsg("fullName", validationErrors)}
            />
            <input
                type="email"
                placeholder={"Email"}
                value={data.email}
                name="email"
                onChange={handleInputChange}
                required
            />
            <input
                type="password"
                placeholder={"Password"}
                value={data.password}
                name="password"
                onChange={handleInputChange}
                required
                error={getErrorMsg("password", validationErrors)}
            />
            <input
                type="password"
                placeholder={"Confirm Password"}
                value={data.confirmPassword}
                name="confirmPassword"
                onChange={handleInputChange}
                required
                error={getErrorMsg("confirmPassword", validationErrors)}
            />
             <Button
                    title={"Sign up"}
                    type="submit"
                    disabled={loading}
                />
            {submitError && <h1>{submitError}</h1>}

            <h3>Already have account?</h3>
            <Link href={"/login"}>Login</Link>
        </form>
    );
}
