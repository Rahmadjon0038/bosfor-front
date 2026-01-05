import axios from "axios";
import Cookies from "js-cookie";

import { instance } from "./api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const register = async({registerData})=>{
  const response = await instance.post('/auth/register',registerData)
  return response.data
}

export const useRegister = ()=>{
  const registerMutation = useMutation({
    mutationFn:register,
    onSuccess:(data,vars)=>{
      if(vars.onSuccess){
        vars.onSuccess(data)
      }
    },
    onError:(err,vars)=>{
      if(vars.onError){
        vars.onError(err)
      }
    }
  })

  return registerMutation
}
// -------------------------------------
const login = async({logindata})=>{
  const response = await instance.post('/auth/login',logindata)
  return response.data
}

export const uselogin = ()=>{
  const loginMutation = useMutation({
    mutationFn:login,
    onSuccess:(data,vars)=>{
      if(vars.onSuccess){
        vars.onSuccess(data)
      }
    },
    onError:(err,vars)=>{
      if(vars.onError){
        vars.onError(err)
      }
    }
  })

  return loginMutation
}