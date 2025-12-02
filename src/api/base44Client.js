import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "689ba907a42e34b5e0bca893", 
  requiresAuth: true // Ensure authentication is required for all operations
});
