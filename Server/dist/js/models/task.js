"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const taskSchema = new mongoose_1.Schema({
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    pickedBy: {
        type: String,
        required: false,
    },
}, { timestamps: true });
exports.default = mongoose_1.model('Task', taskSchema);
