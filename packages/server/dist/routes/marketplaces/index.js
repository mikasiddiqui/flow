"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const marketplaces_1 = __importDefault(require("../../controllers/marketplaces"));
const router = express_1.default.Router();
// READ
router.get('/templates', marketplaces_1.default.getAllTemplates);
router.post('/custom', marketplaces_1.default.saveCustomTemplate);
// READ
router.get('/custom', marketplaces_1.default.getAllCustomTemplates);
// DELETE
router.delete(['/', '/custom/:id'], marketplaces_1.default.deleteCustomTemplate);
exports.default = router;
//# sourceMappingURL=index.js.map