**** From Zero to Protected Routes in React Router DOM ****
I built a small project with React Router DOM + TypeScript to understand how modern web apps handle navigation. Here’s what I learned 

** Key takeaways **:
React Router DOM lets you move between pages without refreshing the website — making apps feel smooth and fast.

Built multiple pages: Home, About, Contact, User, Login, Dashboard.

Added a Navbar with <Link> for static navigation (user clicks → goes to page).

Used useParams to read dynamic values from the URL (like /user/10 → id = 10).

Learned useNavigate to redirect users programmatically (e.g., after login).
Created a ProtectedRoute so only logged‑in users can access the Dashboard 

=====> Biggest lesson:
<Link> → user chooses where to go.
useNavigate → app decides where to send the user.

I did encounter one issue: in src > App.tsx at line 29 (<ProtectedRoute>), I keep getting an error even though the website works fine — if anyone can explain why, I’d love to learn from you!
