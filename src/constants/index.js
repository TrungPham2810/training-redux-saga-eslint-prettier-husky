import React from 'react';
import AdminHomePage from './../containers/AdminHomePage'
import Taskboard from '../containers/Taskboard';
import Test from '../containers/Test';
import Header from '../components/DashBoard/Header';

export const API_URL = 'http://localhost:3000';
export const STATUSES = [
  {
    value: 0,
    label: "Ready"
  },
  {
    value: 1,
    label: "In Processing"
  },
  {
    value: 2,
    label: "Complete"
  }
];

export const STATUS_CODE = {
    SUCCESS:200,
    CREATED:201,
    UPDATED:202
}

export const ADMIN_ROUTES = [
    {
        path:'/task',
        name: 'Manage Tasks',
        component: Taskboard

    },
    {
        path:'/',
        name: 'Admin Home',
        exact:true,
        component: AdminHomePage

    },
]

