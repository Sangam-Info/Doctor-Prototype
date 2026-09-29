# Astha Multispeciality Hospital — Prototype Documentation

**Prepared by:** Sangam InfoAnalytics
**File documented:** `astha-hospital-prototype.html`
**Document type:** Prototype walkthrough & scope reference (based only on the actual prototype)

---

## Executive Summary (30–60 second read)

Astha Multispeciality Hospital prototype is a clickable, front-end demonstration of a complete hospital software platform. In one place it shows a **public hospital website with online appointment booking** and four internal work areas — a **Patient Portal**, a **Doctor Portal**, a **Hospital Admin console**, and a **Staff / Front-Desk & Nursing portal**.

It lets a hospital owner or management team *see and click through* exactly how patients would book appointments, how doctors would run consultations, how the front desk would check patients in and issue tokens, how nurses would record medications and vitals, and how management would monitor beds, revenue and departments — all before any real software is built.

**Important:** this is a **design & workflow prototype**. It demonstrates screens, navigation and user experience with sample (placeholder) data. It does **not** yet contain a database, logins, or live integrations — those belong to the production application described later in this document.

---

## 1. Prototype Objective

**What the Astha Hospital system is designed to achieve**
A single, connected digital platform covering the full journey of a patient and the daily work of a multispeciality hospital — from a patient discovering the hospital online, through booking, consultation, lab tests, admission and billing, to the management team's operational overview.

**Main problems it aims to solve**
- Patients having to call or walk in just to book an appointment.
- Manual registers and paperwork for appointments, tokens, patients and beds.
- Front-desk crowding and unclear waiting queues.
- Doctors lacking a single place to see their day, patient history and write prescriptions/lab orders.
- Management having no live view of beds, revenue, appointments or department load.
- Information scattered across paper, phones and spreadsheets.

**Purpose of this prototype**
- To **communicate the proposed product** clearly to hospital decision-makers.
- To **validate the workflows** (booking, consultation, IPD, front desk) before development.
- To act as the **approved visual and functional reference** for building the real application.

**How it can support hospital operations and patient care**
By giving every role (patient, doctor, admin, front desk, nurse) a purpose-built screen, the eventual system reduces manual effort, shortens waiting, keeps records in one place, and gives management real-time operational visibility.

---

## 2. Who Will Use the System

- **Patients** — browse the hospital website, book appointments online, and (in the portal) view their appointments, records, lab reports, prescriptions and bills.
- **Doctors** — see today's clinic and patient queue, open a patient, review history, run a consultation, record diagnosis, and issue prescriptions and lab orders.
- **Hospital Admin / Management** — monitor overall operations: dashboards, revenue, appointment analytics, department overview, IPD beds, staff and billing.
- **Reception / Front-Desk Staff** — check in scheduled patients, register walk-ins, issue tokens and manage the live token queue.
- **Nurses** — run the nursing station: follow the medication schedule, mark medicines given, and record patient vitals for admitted patients.
- **Other hospital / support staff** — represented through the admin's staff management and the front-desk/nursing operations.

---

## 3. Complete System Structure

The prototype is organised as **five portals**, switchable from the top switcher (a demonstration control that stands in for real, role-based logins in production):

| Portal | Who it's for | In the prototype |
|---|---|---|
| **A. Hospital Website** | Public / patients | `Website` |
| **B. Patient Portal** | Registered patients | `Patient` |
| **C. Doctor Portal** | Doctors | `Doctor` |
| **D. Hospital Admin Portal** | Management | `Admin` |
| **E. Staff / Front-Desk Portal** | Reception & nursing | `Staff` |

> The website also includes a small **"About the developer (Sangam InfoAnalytics)"** page reachable from the footer credit. This is company information about the developer, not a hospital operational module.

---

## 4. Website / Public Side

**Screens present:** Home, Appointment booking flow, Booking confirmation.

- **Hospital information** — a hero introduction ("Compassionate care, advanced medicine"), a short about line, and headline stats (specialities, expert doctors, 24×7 emergency).
- **Departments** — a "Centres of excellence" grid of specialities (Cardiology, Orthopedics, Neurology, Pediatrics, Dermatology, ENT, General Medicine, Gynecology).
- **Doctors / specialists** — a "Our specialists" grid of doctor cards (shown with placeholders such as *Dr. [Cardiology]*), each with a **Book appointment** action.
- **Online appointment booking** — a guided multi-step flow:
  - **Department selection** — choose the speciality.
  - **Doctor selection** — choose a doctor within that department.
  - **Date / time selection** — pick an available time slot.
  - **Appointment confirmation** — a confirmation screen with a booking reference and an animated success state.
- **Patient details** — patient information capture is represented in the booking/registration flow (fuller registration forms appear on the staff side).
- **Footer links** — Departments, Our doctors, Book appointment, **Health packages**, Patient portal, Lab reports, Billing, **Insurance**. *(Health packages and Insurance appear here as informational links only — they are not built-out screens in the prototype.)*
- **Mobile-friendly experience** — the website (and every portal) is responsive, with layouts that adapt down to mobile, including a hamburger menu on small screens.

---

## 5. Patient Portal

**Screens present:** Dashboard, Appointments, Medical records, Lab reports, Prescriptions, Billing & payments, Profile.

- **Patient dashboard** — a personalised greeting ("Good morning, Riya") with summary stat cards.
- **Upcoming appointments** — an "Upcoming" list with doctor, department and status badges (Confirmed / Pending).
- **Past visits** — a history of previous visits within Medical records.
- **Medical records** — the patient's record area, including a **Medical summary** and past visit history.
- **Lab reports** — a list of lab reports with status badges (Processing / Completed).
- **Prescriptions** — active prescriptions and a **Current medication** view (medicine, dosage, duration, status).
- **Billing & payments** — outstanding balance, **Invoices** list and payment status.
- **Insurance information** — *not a separate built screen in the prototype*; insurance appears only as a website footer link and is noted here as a future/production item (Section 13).
- **Patient profile** — **Personal details** for the patient.
- **Medical summary** — a consolidated summary panel within Medical records.
- **Notifications** — an in-app notifications panel (e.g., lab report ready, appointment reminder, payment due).

---

## 6. Doctor Portal

**Screens present:** Dashboard (Today's clinic), My patients, Consultation, Lab reports.

- **Doctor dashboard ("Today's clinic")** — the doctor's day at a glance with summary stats.
- **Today's appointments** — the day's scheduled appointments.
- **Patient queue** — an **Appointment queue** with a **Start** action per patient, plus a **Consultation load** chart.
- **My patients** — the doctor's patient list.
- **Patient history** — a **Patient history** panel when a patient is opened.
- **Consultation** — a tabbed consultation workspace.
- **Clinical notes** — **Clinical notes & diagnosis** capture.
- **Diagnosis** — recorded as part of the consultation.
- **Prescription / medicines** — a **Prescription** builder (add/remove medicine rows with dosage/duration).
- **Lab test orders** — an **Order lab tests** panel to request tests during consultation.
- **Lab report review** — a **Lab reports** screen for the doctor to review results.

---

## 7. Hospital Admin Portal

**Screens present:** Hospital dashboard, IPD & bed management, Appointments, Departments, Staff, Billing.

- **Hospital dashboard** — the management control centre.
- **Operational overview** — KPI cards (patients this month, appointments today, beds available, revenue this month) with trend indicators.
- **Revenue analytics** — a **Revenue trend** chart.
- **Appointment analytics** — an **Appointment status** breakdown (Confirmed / Completed / Pending / Cancelled).
- **Department overview** — a **Department overview** table (doctors, today's appointments, beds, occupancy).
- **IPD management** — the **IPD & bed management** screen.
- **Bed availability** — a **Ward — General (Floor 2)** bed grid with statuses **Available / Occupied / Cleaning / Reserved**.
- **Patient admission** — an **Awaiting admission** list and an **Assign bed** flow (select patient → select bed → confirm admission).
- **Department management** — a **Departments** screen.
- **Staff management** — a **Staff** screen with an **Add staff member** form.
- **Billing / revenue / collections** — a **Billing** screen for management oversight.

---

## 8. Staff / Front Desk

**Screens present:** Front desk dashboard, Check-in, Register walk-in, Token queue, Nursing station.

- **Front desk dashboard** — shift summary with stat cards, a **Lobby queue**, and a **Footfall today** chart.
- **Appointment check-in** — a **Front desk — check-in** screen listing today's scheduled appointments; checking a patient in assigns a token and updates status.
- **Patient registration / Walk-in registration** — a **Register walk-in patient** form (name, age, gender, phone, department, reason) with a **Token issued** panel and a **How it works** guide.
- **Token generation** — tokens are issued on check-in and on walk-in registration.
- **Token queue** — a **Token queue** board with a "Now serving" display and an **Up next** list.
- **Calling next patient** — a **Call next** action advances the queue.
- **Nursing station** — the ward-side workspace.
- **Medication schedule** — a **Medication schedule** with a **Mark given** action per medicine, plus a **Current medication** view.
- **Vitals recording** — a **Vitals to record** list with a **Record** action.
- **Inpatient workflow** — nursing operations are tied to admitted patients and their beds.

---

## 9. Complete Patient Journey

**OPD (outpatient) journey — as represented in the prototype**

```
Patient
 → Hospital Website
 → Select Department
 → Select Doctor
 → Select Date & Time
 → Enter Patient Details
 → Appointment Confirmation
 → Hospital Check-in (front desk)
 → Token Queue
 → Doctor Consultation
 → Diagnosis
 → Prescription / Lab Tests
 → Lab Reports
 → Follow-up / Medical Records
 → Billing & Payment
```

**IPD (inpatient) journey — as represented in the prototype**

```
Patient
 → Admission (Awaiting admission list)
 → Bed Assignment (Assign bed flow)
 → Nursing / Vitals (Nursing station)
 → Doctor Care
 → Treatment (Medication schedule)
 → Billing
 → Discharge
```

Each step above maps to a real screen or action in the prototype (booking flow, front-desk check-in and token queue, doctor consultation, nursing station, IPD bed management, and billing).

---

## 10. Module-by-Module Details

Only modules **actually present** in the prototype are listed.

### Website & Appointment Booking
- **Objective:** public presence + let patients book online.
- **Who uses it:** patients / public.
- **Main functions:** hospital info, departments, doctors, department→doctor→date/time→confirmation booking.
- **Hospital purpose:** reduce phone/walk-in bookings; project a professional image.
- **Real-world use:** a patient finds the hospital, picks a speciality and doctor, and books a slot.

### Patient Portal
- **Objective:** patient self-service.
- **Who uses it:** registered patients.
- **Main functions:** dashboard, appointments, medical records, lab reports, prescriptions, billing, profile, notifications.
- **Hospital purpose:** fewer front-desk queries; patients access their own information.
- **Real-world use:** a patient checks an upcoming appointment, views a lab report, or sees a pending bill.

### Doctor Portal & Consultation
- **Objective:** the doctor's clinical workspace.
- **Who uses it:** doctors.
- **Main functions:** today's clinic, patient queue, my patients, patient history, consultation (notes, diagnosis, prescription, lab orders), lab review.
- **Hospital purpose:** faster, structured consultations; cleaner clinical records.
- **Real-world use:** a doctor starts the next patient, reviews history, records diagnosis and issues a prescription.

### Front-Desk / Reception
- **Objective:** manage arrivals and the waiting area.
- **Who uses it:** reception staff.
- **Main functions:** front-desk dashboard, check-in, walk-in registration, token issue, token queue.
- **Hospital purpose:** orderly queues, less crowding, faster registration.
- **Real-world use:** the desk checks in a booked patient, registers a walk-in, and calls the next token.

### Nursing & Ward Operations
- **Objective:** ward-side patient care.
- **Who uses it:** nurses.
- **Main functions:** medication schedule (mark given), vitals recording, current medication.
- **Hospital purpose:** safe medication administration and timely vitals capture.
- **Real-world use:** a nurse marks a dose as given and records a patient's vitals.

### IPD & Bed Management
- **Objective:** manage inpatient wards and beds.
- **Who uses it:** admin & front desk.
- **Main functions:** ward/bed grid with statuses, awaiting-admission list, assign-bed flow.
- **Hospital purpose:** clear bed availability and a smooth admission process.
- **Real-world use:** admit a waiting patient by assigning an available bed.

### Hospital Admin Console
- **Objective:** operational control and oversight.
- **Who uses it:** management.
- **Main functions:** dashboard (KPIs, revenue trend, appointment status, department overview), appointments, departments, staff (add staff), billing.
- **Hospital purpose:** real-time visibility into operations, finances and staffing.
- **Real-world use:** management reviews revenue, bed occupancy and department load at a glance.

---

## 11. Hospital Benefits

The eventual system, based on this prototype, is designed to help with:

- **Appointment management** — online booking + status tracking.
- **Patient experience** — a self-service portal and a professional website.
- **Faster registration** — quick walk-in registration and check-in.
- **Queue management** — token generation and a live token board.
- **Doctor workflow** — a single workspace for queue, history, consultation and prescriptions.
- **Medical records** — records, summaries and prescriptions in one place.
- **Lab coordination** — lab orders from consultation and report review.
- **Prescription management** — structured prescription entry.
- **IPD / bed management** — live bed status and a clear admission flow.
- **Staff management** — a staff directory and onboarding form.
- **Billing** — invoices and outstanding tracking (patient and admin views).
- **Hospital reporting** — dashboards for revenue, appointments and departments.
- **Operational visibility** — one screen for management to see the whole hospital.
- **Reduced manual work** — less paper, fewer registers, fewer phone calls.

---

## 12. Prototype vs Production Application

> **This is a prototype created to demonstrate the proposed hospital application's structure, user experience, workflow and functionality. It is not the final production hospital management system.**

The actual application must be developed according to the hospital's exact requirements.

**What the prototype IS (existing):**
- A single self-contained HTML file with all five portals and their screens.
- Realistic, responsive UI, navigation and demo interactions.
- Sample / placeholder data (e.g., *Dr. [Cardiology]*, sample patients, sample amounts).
- Interactions that run in the browser only (for example, checking a patient in, issuing a token, assigning a bed, or marking medication given change the screen during the session).

**What the prototype does NOT include (and is not claimed to):**
- No database and no persistent storage — nothing is saved after the page is closed.
- No real authentication / login — the portal switcher is a demonstration control, not secure role-based access.
- No backend, APIs or business logic on a server.
- No real integrations (payment gateway, lab systems, pharmacy, SMS/WhatsApp/email, insurance).
- No security, privacy controls, audit logs or backups.

---

## 13. Future Production Application

The following are **FUTURE / PRODUCTION requirements** — they are **not** present in the current prototype and would be built in the real application:

- **Secure authentication** (real logins, password reset, sessions).
- **Role-based access control** for patient, doctor, admin, front-desk and nurse.
- **Real patient database** with persistent records.
- **Doctor / staff accounts** linked to profiles and schedules.
- **Medical record storage** (structured, access-controlled EMR).
- **Secure document / file storage** (reports, prescriptions, uploads).
- **Real appointment database** with availability logic and conflict checks.
- **Real-time queue** shared across devices and screens.
- **Lab integration** (test catalogue, orders, results, report files).
- **Pharmacy integration** (if required).
- **Billing / payment integration** (invoices + online payment gateway).
- **Insurance workflows** (if required).
- **Notifications** (in-app + event-driven).
- **SMS / WhatsApp / email** messaging for reminders and alerts.
- **Audit logs** where required.
- **Data backup & recovery.**
- **Security & privacy controls** (data protection, encryption in transit/at rest).
- **Reports & exports** (PDF / Excel) from live data.
- **Hospital-wide deployment** (hosting, domains, environments).

---

## 14. Client Requirement Confirmation (Checklist)

Before actual development begins, the following must be confirmed with the hospital:

- [ ] Hospital departments (final list)
- [ ] Doctors and specialities (verified details)
- [ ] Staff roles (reception, nursing, admin, others)
- [ ] Patient registration fields
- [ ] Appointment rules (slot lengths, working hours, cancellations)
- [ ] Consultation workflow
- [ ] OPD / IPD workflow
- [ ] Bed / ward structure (wards, floors, bed numbering)
- [ ] Nursing workflow (medication, vitals, rounds)
- [ ] Lab workflow (tests, sample handling, result entry)
- [ ] Pharmacy requirements
- [ ] Prescription format
- [ ] Billing structure
- [ ] GST / tax requirements (if applicable)
- [ ] Payment methods
- [ ] Insurance workflow
- [ ] Reports required
- [ ] Notifications required
- [ ] WhatsApp / SMS / email requirements
- [ ] Medical document requirements
- [ ] Data privacy / security requirements
- [ ] Hosting / domain
- [ ] Database
- [ ] Backup / recovery
- [ ] Existing data migration (from current systems, if any)
- [ ] Any third-party integrations

---

*Prepared by Sangam InfoAnalytics. This document describes the Astha Multispeciality Hospital prototype exactly as built and separates existing prototype functionality from future production requirements. Timelines and delivery for the production application are quoted separately in working days (Monday–Saturday, Sundays off).*
