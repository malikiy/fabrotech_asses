
 /**
  * @swagger
  * tags:
  *   name: Service Name
  *   description: Set your description here
  */

 /**
  * securitySchemes:
  *   bearerAuth:            
  *     type: http
  *     scheme: bearer
  *     bearerFormat: JWT
  */

/**
 * @swagger
 * components:
 *   schemas:
 *     Register:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *         - phone
 *         - role
 *       properties:
 *         name:
 *           type: string
 *           description: user full name
 *         email:
 *           type: string
 *           description: User email
 *         password:
 *           type: string
 *           description: User password
 *         phone:
 *           type: string
 *           description: User phone number
 *         role:
 *            type: string
 *         
 *       example:
 *         name: "Muhammad Yusuf Malik"
 *         email: "malik.wetalk@gmail.com"
 *         phone: "087783060729"
 *         password: "spvadmin123"
 *         role: "user" 
 * 
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     RegisterSuccessResponse:
 *       type: object
 *       example:
 *         status: 200
 *         message: "Success create data"
 *         data:
 *           id: "e87caed7-f748-4bd1-a3b4-1b1af84d375b"
 *           name: "Muhammad Yusuf Malik"
 *           email: "malik.wetalk@gmail.com"
 *           phone: "08778361234"
 *           role: "user"
 * 
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     RegisterEmailExistResponse:
 *       type: object
 *       example:
 *         status: false
 *         message: "Email already exist"
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     RegisterPhoneExistResponse:
 *       type: object
 *       example:
 *         status: false
 *         message: "Phone number already exist"
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     InternalServerErrorResponse:
 *       type: object
 *       example:
 *         status: 500
 *         message: "Internal server error"
 */

/**
 * @swagger
 * /api/wesme-cms/v1/body/create:
 *   post:
 *     summary: Manage body content
 *     tags: [Manage Body]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Register'
 *     responses:
 *       200:
 *         description: success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RegisterSuccessResponse'
 *       500:
 *         description: email already registered
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RegisterEmailExistResponse'
 */