/*
  # Create job applications table

  ## New Tables
  
  - `job_applications`
    - `id` (uuid, primary key) - Unique identifier for each application
    - `first_name` (text) - Applicant's first name
    - `last_name` (text) - Applicant's last name
    - `email` (text) - Applicant's email address
    - `phone` (text) - Applicant's phone number
    - `experience` (text) - Years of sales experience
    - `linkedin` (text, nullable) - LinkedIn profile URL (optional)
    - `cover_letter` (text) - Why they're a great fit
    - `created_at` (timestamptz) - When the application was submitted
    - `status` (text) - Application status (new, reviewing, contacted, rejected)

  ## Security
  
  - Enable RLS on `job_applications` table
  - Add policy for public INSERT (anyone can submit an application)
  - Add policy for authenticated users to view applications (for internal use)

  ## Notes
  
  1. Applications are stored securely with RLS enabled
  2. Public users can submit applications but cannot view them
  3. Only authenticated users (internal team) can view applications
  4. Default status is 'new' for all applications
*/

CREATE TABLE IF NOT EXISTS job_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  experience text NOT NULL,
  linkedin text,
  cover_letter text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an application"
  ON job_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all applications"
  ON job_applications
  FOR SELECT
  TO authenticated
  USING (true);