
// ENDPOINTS LIST FROM BACKEND

// -------------ADMIN ROUTES------------------

{USERS}
// GET ALL (_id, email, isAdmin, isProfessional)
'localhost:3001/admin/users'
// UPDATE (params: username | body: pending define props) || DELETE (params: username)
'localhost:3001/admin/users/:username'

{APPOINTMENT}
// UPDATE (params: id | body: updateInfo) || DELETE (params: id)
'localhost:3001/admin/appointment/:id'

{CATEGORY}
// CREATE (body: name, img)
'localhost:3001/admin/category'
// UPDATE (params: id | body: updateInfo) || DELETE (params: id)
'localhost:3001/admin/category/:id'

{TIP}
// CREATE (body: text)
'localhost:3001/admin/tips'
// UPDATE (params: id | body: updateInfo) || DELETE (params: id)
'localhost:3001/admin/tips/:id'

// -------------USERS ROUTES------------------

// CREATE (body: name, lastname, username, email, password, country for all | for professionals users, isProffesional:true, license and category selection too)
'localhost:3001/users'
// GET USERS TO FORM VALIDATION
'localhost:3001/users'
// GET FULL INFO UNIQUE USER (params: username) 
'localhost:3001/users/:username'
// UPDATE USER || DELETE USER (FROM CLIENT DASHBOARD)
'localhost:3001/users/:username'

// -------------CATEGORIES ROUTES------------------

// GET ALL || UPDATE SEARCHCOUNT(body)
'localhost:3001/categories'

// -------------PROFESSIONALS ROUTES------------------

// GET ALL PROFESSIONAL USERS
'localhost:3001/professionals'
// GET UNIQUE PROFESSIONAL FULL INFO
'localhost:3001/professionals/:username'

// -------------REVIEWS ROUTES------------------

// GET 3 REVIEWS FILTERED RATE:GOOD
'localhost:3001/reviews'
// POST REVIEW (body: rate, userId, text)
'localhost:3001/reviews'

// -------------TIPS ROUTES------------------

// GET 4 TIPS FILTERED ISAPPROVED:TRUE
'localhost:3001/tips'
// POST NEW TIP (PENDING ADMIN APPROVAL, body: text)
'localhost:3001/tips'