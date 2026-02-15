YogaPlanet - Full-stack scaffold (Django backend + React frontend)

Structure:
- backend/         -> Django project (API at /api/poses/)
- frontend/        -> React SPA (uses relative /api/poses/ path)

Quick start (Linux/Mac):
1) Backend
   python -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   cd backend
   python manage.py migrate
   python manage.py createsuperuser   # optional
   python manage.py runserver

2) Frontend (new terminal)
   cd frontend
   npm install
   npm start

Notes:
- Backend uses SQLite for quick local development.
- React uses relative path '/api/poses/' so run frontend and backend on the same host (or configure proxy in package.json).
- To connect across different hosts, update axios base URL in src/pages/Poses.js and other components.


### Load Sample Data
Run this after migrations:

```
python manage.py loaddata sample_poses.json
```
