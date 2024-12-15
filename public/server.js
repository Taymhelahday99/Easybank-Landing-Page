const express = require('express');
const path = require('path');
const app = express();

// Set static folder
app.use(express.static('public', {
    setHeaders: (res, filePath) => {
        // Correct MIME type for .svg files
        if (filePath.endsWith('.svg')) {
            res.setHeader('Content-Type', 'image/svg+xml');
        }
    }
}));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
