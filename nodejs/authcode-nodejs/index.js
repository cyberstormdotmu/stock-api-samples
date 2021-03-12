/**
 * Copyright 2021 Adobe Systems Incorporated. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
const { AuthcodeServer } = require('./server/authcode_server.js');

// config file path is relative to /server folder
const server = new AuthcodeServer('./config.json');
