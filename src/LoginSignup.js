import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import './LoginSignup.css'; 

const LoginSignup = () => {
    const [activeTab, setActiveTab] = useState('student');
    const [showSignup, setShowSignup] = useState(false);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setShowSignup(false); 
    };

    const handleSignupClick = () => {
        setShowSignup(true);
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log(`Login form submitted for ${activeTab}`);
    };

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        console.log(`Signup form submitted for ${activeTab}`);
    };

    return (
        <div >
        <div className="form-container">
            <div className='ButtonColor'>
   
                <Button 
                onClick={() => handleTabChange('student')}>Student</Button>
                <Button onClick={() => handleTabChange('company')}>Company</Button>
                <Button onClick={() => handleTabChange('mentor')}>Mentor</Button>
            </div>
            <div>
                {showSignup ? (
                    <div>
                        <h2>Signup</h2>
                        <form onSubmit={handleSignupSubmit}>
                            <Box component="div" sx={{ marginBottom: 2 }}>
                                <TextField label="Name" variant="outlined" fullWidth required />
                            </Box>
                            <Box component="div" sx={{ marginBottom: 2 }}>
                                <TextField label="Email" type="email" variant="outlined" fullWidth required />
                            </Box>
                            <Box component="div" sx={{ marginBottom: 2 }}>
                                <TextField label="Password" type="password" variant="outlined" fullWidth required />
                            </Box>
                            <Button type="submit" variant="contained" color="primary">Signup</Button>
                        </form>
                        <p>Already have an account? <a href="#" onClick={() => setShowSignup(false)} sx={{ width: '100%' }}>Login here</a></p>
                    </div>
                ) : (
                    <div>
                        {activeTab === 'student' && (
                            <div>
                                <h2>Student Login</h2>
                                <form onSubmit={handleLoginSubmit}>
                                    <Box component="div" sx={{ marginBottom: 2 }}>
                                        <TextField label="Username or Email" variant="outlined" fullWidth required />
                                    </Box>
                                    <Box component="div" sx={{ marginBottom: 2 }}>
                                        <TextField label="Password" type="password" variant="outlined" fullWidth required />
                                    </Box>
                                    <Button 
                                    type="submit" variant="contained">Login</Button>
                                </form>
                                <p>New student? <a href="#" onClick={handleSignupClick}>Signup here</a></p>
                            </div>
                        )}
                        {/* Add similar blocks for company and mentor login */}
                        {activeTab === 'company' && (
                            <div>
                                <h2>Company Login</h2>
                                <form onSubmit={handleLoginSubmit}>
                                    <Box component="div" sx={{ marginBottom: 2 }}>
                                        <TextField label="Username or Email" variant="outlined" fullWidth required />
                                    </Box>
                                    <Box component="div" sx={{ marginBottom: 2 }}>
                                        <TextField label="Password" type="password" variant="outlined" fullWidth required />
                                    </Box>
                                    <Button type="submit" variant="contained" color="primary">Login</Button>
                                </form>
                                <p>New company? <a href="#" onClick={handleSignupClick}>Signup here</a></p>
                            </div>
                        )}
                        
                        {activeTab === 'mentor' && (
                            <div>
                                <h2>Mentor Login</h2>
                                <form onSubmit={handleLoginSubmit}>
                                    <Box component="div" sx={{ marginBottom: 2 }}>
                                        <TextField label="Username or Email" variant="outlined" fullWidth required />
                                    </Box>
                                    <Box component="div" sx={{ marginBottom: 2 }}>
                                        <TextField label="Password" type="password" variant="outlined" fullWidth required />
                                    </Box>
                                    <Button type="submit" variant="contained" color="primary">Login</Button>
                                </form>
                                <p>New mentor? <a href="#" onClick={handleSignupClick}>Signup here</a></p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
        </div>
    );
};

export default LoginSignup;


