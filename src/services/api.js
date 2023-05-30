import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://rlvpcpaoqjxwwtxrvoyo.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsdnBjcGFvcWp4d3d0eHJ2b3lvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ5MjcyMTIsImV4cCI6MjAwMDUwMzIxMn0.OqN_bG77VBS4NzupO-3yx8Lkr-Fa13ow4FiXAY6b7XA",
        authorization: " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsdnBjcGFvcWp4d3d0eHJ2b3lvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ5MjcyMTIsImV4cCI6MjAwMDUwMzIxMn0.OqN_bG77VBS4NzupO-3yx8Lkr-Fa13ow4FiXAY6b7XA"
    }
})