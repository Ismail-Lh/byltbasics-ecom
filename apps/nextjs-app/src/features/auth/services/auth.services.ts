import type { IApiErrorResponse, IApiSuccessResponse } from "@byltbasics/types";
import type { AxiosError } from "axios";

import { API_URL } from "@/constants/env.constants";
import { asyncTryCatch } from "@/utils";
import axios from "axios";

import type { ILoginDto, IRegisterDto } from "../components/forms";

/**
 * Registers a new user with the provided registration credentials.
 *
 * @param registerDto - The registration data required to create a new user.
 * @returns A promise that resolves to the registration response.
 */
export async function registerUser(
  registerDto: IRegisterDto,
): Promise<IApiSuccessResponse<{ message: string }>> {
  const { name, email, password } = registerDto;

  const { data: responseData, error } = await asyncTryCatch(
    axios.post<IApiSuccessResponse<{ message: string }>>(
      `${API_URL}/auth/register`,
      {
        name,
        email,
        password,
      },
    ),
  );

  if (error) {
    const axiosError = error as AxiosError<IApiErrorResponse>;
    if (axiosError.response) {
      throw new Error(axiosError.response.data.body.message);
    }

    throw new Error("Registration failed. Please try again.");
  }

  return responseData.data;
}

/**
 * Logs in a user with the provided login credentials.
 *
 * @param loginDto - The login form data containing user credentials.
 * @returns A promise that resolves to the login response.
 */
export async function loginUser(
  loginDto: ILoginDto,
): Promise<IApiSuccessResponse<{ message: string }>> {
  const { data: responseData, error } = await asyncTryCatch(
    axios.post<IApiSuccessResponse<{ message: string }>>(`${API_URL}/auth/login`, loginDto, {
      withCredentials: true,
    }),
  );

  if (error) {
    const axiosError = error as AxiosError<IApiErrorResponse>;
    if (axiosError.response) {
      throw new Error(axiosError.response.data.body.message);
    }

    throw new Error("Login failed. Please try again.");
  }

  return responseData.data;
}
