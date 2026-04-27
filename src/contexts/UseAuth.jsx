"use client";

import React, { use } from 'react';
import { AuthContext } from './authContext';

const UseAuth = () => {
    const authInfo = use(AuthContext)
    return authInfo
};

export default UseAuth;