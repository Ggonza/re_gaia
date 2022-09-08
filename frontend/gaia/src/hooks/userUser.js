import React from "react";
import {getMeApi} from "../api/auth";

export function userUser() {
    const getMe = async (token) => {
        try {
            const response = await getMeApi(token);
            return response;
        } catch (e) {
            throw e;
        }
    };
    return {
        getMe,
    };
}