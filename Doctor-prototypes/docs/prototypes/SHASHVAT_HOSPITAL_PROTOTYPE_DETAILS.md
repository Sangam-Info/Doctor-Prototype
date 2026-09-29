# Shashvat Hospital — Prototype Details

**Document type:** Functional documentation of an existing clickable prototype
**Prepared by:** Sangam InfoAnalytics, Junagadh
**Prototype file analysed:** `index.html` (single self-contained file — HTML, CSS and JavaScript together)
**Other project files:** `DEPLOY.md` (deployment notes and demo script), `wrangler.toml` (Cloudflare deployment configuration)

> Everything in this document describes what the prototype **actually does today**, based on a line-by-line
> review of its code. Where the screen shows a message or a figure that is not backed by real logic, this
> document says so. All names, numbers, patients, bills and records shown in the prototype are
> **DEMO / PROTOTYPE DATA**.

---

## Table of contents

1. Project Objective
2. Who Will Use This System
3. Complete Module / Feature List
4. Doctor Management
5. Patient Management
6. OPD / Queue Management
7. Appointment Management
8. Consultation / Prescription
9. Billing & Payment
10. Lab / Medical Report Management
11. Hospital Finance / Reporting
12. Public / Patient Online Booking
13. User Interface & Experience
14. Demo Data & Prototype Logic
15. Complete User Workflows
16. What This Prototype Represents
17. Prototype vs Production System
18. Future Production Requirements — NOT PART OF THIS PROTOTYPE
19. Client-Facing Objective Summary
20. Important Prototype Disclaimer
- Appendix A — Messages that are simulated, not performed
- Appendix B — Inactive code found during analysis

---

## 1. PROJECT OBJECTIVE

### Purpose of the prototype
The prototype is a clickable, browser-based demonstration of a hospital OPD (out-patient department)
management system for **Shashvat Hospital, Junagadh**. It lets a hospital owner, doctor or desk staff member
tap through the proposed screens on a phone or laptop and see how day-to-day OPD work would be handled in
one system.

### Problem it is designed to address
The screens and on-screen explanations in the prototype are built around these day-to-day OPD problems:

- Patient files, old visits and reports that are hard to find when a patient returns.
- Consultation charges that depend on whether the patient is new or returning, applied by hand at the counter.
- No live view of the OPD queue for the doctor.
- Paper prescriptions written by hand.
- The owner not knowing the day's collection without calling reception.
- Discounts given at the counter with no record of who gave them.
- Counter cash tallied at day-end in a register.
- Duplicate patient files created for the same person.
- Appointments that only the desk can book, usually by phone.

### Main objective
To show, in one working demo, how reception, doctors, the owner and patients (for booking only) would each
use the same system, and how an action by one of them immediately shows up for the others.

### Healthcare workflow it demonstrates
The full OPD cycle:

> Appointment (by desk or by the patient's booking link) → arrival at the desk → token in the doctor's queue →
> consultation → prescription → billing and payment → day-end counter tally → owner's collection and doctor
> payout view — with the patient's file (history and reports) available throughout.

In-patient (IPD/ward), pharmacy and laboratory **departments** are not modelled as modules (see section 17).

---

## 2. WHO WILL USE THIS SYSTEM

The prototype's login screen offers four entry points. The first three are staff roles; the fourth is a
public page. In the demo, anyone can pick any role — there are no passwords (see section 17).

### 2.1 Doctor
- **Who:** A consulting doctor. Three demo doctors exist; the prototype opens as Dr. Nilesh Patel, and the
  **Me** tab lets the viewer switch to the other two.
- **Why:** To see his own queue, consult patients, write prescriptions and view patient history.
- **Can do:** View today's summary; call the next token; open patient files and reports; record vitals,
  complaints, diagnosis, medicines, tests, advice and follow-up; generate a digitally-stamped prescription;
  preview a WhatsApp copy of it; upload reports; mark the case seen.
- **Modules:** Doctor dashboard, OPD queue, Consultation, Prescription, Patients, Patient file, Reports, Me.
- **Bottom tabs:** Today · Queue · Patients · Me.

### 2.2 Reception / desk staff
- **Who:** Front-desk staff. The demo desk user is named **Kinjal Rathod**.
- **Why:** To handle appointments, arrivals, registration, billing and the day-end cash count.
- **Can do:** See today's appointments with the charge for each; mark patients arrived (which issues a queue
  token); book appointments; register patients (with duplicate check); make bills with GST, discount and
  payment mode; request the owner's PIN for large discounts; view receipts; close the counter.
- **Modules:** Front desk, Book appointment, Patients, New patient, Billing, New bill, Receipt, Day-end tally,
  Patient file, Reports.
- **Bottom tabs:** Desk · Book · Patients · Billing.

### 2.3 Owner / Administrator
- **Who:** The hospital owner or administrator.
- **Why:** To see collection, footfall, dues, discounts, doctor payouts and staff at a glance.
- **Can do:** View insights and money screens; see every discount with who gave it; view doctor-wise share and
  payable amounts; view staff on duty; view hospital setup.
- **Modules:** Insights, Money, Doctor payouts, Team, Setup.
- **Bottom tabs:** Insights · Money · Team · Setup.
- **Note:** The owner's approval of large discounts is given by entering a PIN **on the reception screen**; the
  owner does not approve from his own login in this prototype.

### 2.4 Patient / public user (booking only)
- **Who:** Any member of the public who opens the hospital's booking link (shown as `shashvat.care/book`).
- **Why:** To book an OPD slot with a chosen doctor at a chosen time without phoning the hospital.
- **Can do:** Choose doctor, day and time; verify a mobile number with a code; enter details (or be recognised
  as an existing patient); receive a booking reference and the amount payable at the counter.
- **Cannot do:** Log in, create an account, or see any file, visit history, report, prescription or bill.
  There is nothing to download or install.

### 2.5 Other staff (listed only)
Nursing, pharmacy and lab staff appear **only as names on the owner's Team list**. They have no login or
screens in the prototype. A "Pull from nurse station" button on the consultation screen fills in demo vitals,
but no nurse screen exists.

---

## 3. COMPLETE MODULE / FEATURE LIST

| # | Module | Objective | User | Screens |
|---|---|---|---|---|
| 1 | Role entry | Choose who is using the system | All | Login screen; desktop top-bar role switch |
| 2 | Doctor dashboard | Doctor's day at a glance | Doctor | Today |
| 3 | OPD queue | Token-based patient flow for each doctor | Doctor | OPD queue |
| 4 | Consultation | Record a clinical visit | Doctor | Consultation + medicine, dose and test sheets |
| 5 | Prescription | Produce the patient's prescription | Doctor | Prescription + WhatsApp preview sheet |
| 6 | Patient directory | Find patients | Doctor, Reception | Patients (search) |
| 7 | Patient file | One place for a patient's details, history and reports | Doctor, Reception | Patient file |
| 8 | Medical reports | Upload and view reports per patient | Doctor, Reception | Upload sheet, Reports sheet, Report viewer |
| 9 | Patient registration | Create patient files with UHID | Reception (and the public page) | New patient; New-patient sheet |
| 10 | Duplicate detection | Stop the same person getting two files | Reception | "Possible duplicate" sheet |
| 11 | Case-type charges | Apply ₹700 new / ₹400 follow-up automatically | All staff screens, public page | Shown across desk, booking, consultation, billing |
| 12 | Front desk | Today's appointments and arrivals | Reception | Front desk |
| 13 | Appointment booking (desk) | Book a slot for a patient | Reception | Book appointment |
| 14 | Billing | Create bills and receipts | Reception | Billing, New bill, Bill ready |
| 15 | Discount control | Owner PIN above ₹500 and a discount log | Reception, Owner | PIN sheet; Money screen |
| 16 | Day-end tally | Compare cash in drawer to cash billed | Reception | Day-end tally |
| 17 | Owner insights | Footfall, departments, diagnoses | Owner | Insights |
| 18 | Money / collection | Collection, dues, payment mix, discounts | Owner | Money |
| 19 | Doctor payouts | Share-based payable per doctor | Owner | Doctor payouts |
| 20 | Team | Staff list with duty status | Owner | Team |
| 21 | Setup | Hospital details and system rules | Owner | Setup |
| 22 | Notifications | Recent alerts | Staff roles | Notifications sheet |
| 23 | Public booking link | Patients book their own slot | Public | 4-step booking page + confirmation |

Detailed descriptions of each module follow in sections 4–12. For each, "data handled" means data held in
the browser's memory for the demo only.

---

## 4. DOCTOR MANAGEMENT

### Doctor information (DEMO DATA)

| Doctor | Department | Room | Reg. no. | Payout share |
|---|---|---|---|---|
| Dr. Nilesh Patel | General Medicine | OPD 1 | G-24118 | 40% |
| Dr. Rupa Mehta | Gynaecology | OPD 2 | G-31904 | 60% |
| Dr. Ketan Shah | Orthopaedics | OPD 3 | G-27756 | 50% |

Doctor details appear on booking screens, the prescription letterhead, the Team list and the payout screen.
There is no screen to add or edit doctors.

### Departments
Three departments are represented through the doctors above. The owner's Insights screen also shows
"Pathology" and "Others" in a static department-share chart; these are not linked to any doctor.

### Doctor dashboard — "Today"
- Four tiles: **Waiting outside** (live count), **Seen till now** (live count), **Average wait** (fixed at
  14 min), **Collected today** (live sum of paid bills).
- **In the room now:** the patient currently with the doctor — token, age/sex, UHID, time in, complaint,
  allergy warning — with **History** and **Start consultation** buttons. If nobody is in the room, a
  **Call next patient** button appears.
- **Up next:** the next two waiting tokens.
- **Needs your attention:** two fixed demo items (a 2D Echo uploaded for Ashok Parmar; HbA1c due for
  Jayaben Solanki), each opening that patient's file.
- **Quick actions:** Find patient; Blank Rx (shows a message only).

### Doctor-wise working
- Each doctor sees **only his own queue** (the queue is filtered by the selected doctor).
- Slot availability is kept **per doctor**, so two doctors can each have a patient at the same time.
- The **Me** tab shows the doctor's profile, patients seen today (live), patients this month (fixed at 386),
  the consultation fee pair (₹700 / ₹400), a rating (fixed at 4.8), and OPD timing (Morning 9:00 AM – 1:00 PM,
  Evening 5:00 PM – 8:00 PM, weekly off Sunday evening). **Change timing** is a placeholder.
- **Switch doctor (demo):** chips to view the system as any of the three doctors.

Queue, consultation and prescription are covered in sections 6 and 8.

---

## 5. PATIENT MANAGEMENT

### Patient registration
Available from Reception (Patients → Register new patient, or the Register button on the desk), from inside
the booking and billing patient pickers, and indirectly through the public booking page.

Registration fields (Reception screen): full name, age, sex, mobile number, blood group, known allergy,
address. The quick "New patient" sheet used inside booking and billing asks for name, age, sex, mobile and
known allergy.

Validation: a name is required, and the mobile number must contain at least 10 digits.

**Note:** The address field on the registration screen is displayed but its value is not saved to the
patient file in the prototype.

### UHID
- Every patient has a UHID with the prefix `SH-` (for example `SH-00841`).
- Newly registered patients receive the next generated number (for example `SH-01711`).
- On-screen text mentions a printed UHID card; no card is actually printed.

### Duplicate detection
Before any new file is created (desk registration, quick sheet), the system checks for an existing patient
with either:
- the **same mobile number**, or
- the **same name** (or the same words in reversed order, e.g. "Trivedi Rakesh") **and an age within 2 years**.

If a match is found, a **"Possible duplicate"** sheet lists the matching file(s) with UHID, visit count and
the case charge that would apply, explains that a second file splits the history and charges ₹700 instead of
₹400, and offers two choices: open the existing file, or **"No, this is a different person — create a new
file."**

The public booking page does not show this sheet; instead it recognises an existing patient by mobile number
(section 12).

### Patient file (profile)
Shows: initials avatar, name, age, sex, blood group, UHID, guardian (where recorded), an allergy warning in
red, chronic conditions as tags, the case-type badge with the last doctor and date seen, a **Call** button
(message only), and either **Consult** (doctor) or **New bill** (reception).

Below that:
- **Visit history** — a timeline of date, diagnosis, note and doctor. New visits are added at the top when a
  doctor closes a consultation.
- **Reports & files** — every uploaded or seeded report, openable, plus **Upload report**.

### Allergies and chronic conditions
- Allergies show as a red warning on the patient file, the doctor's "In the room now" card ("do not
  prescribe") and the consultation screen.
- Chronic conditions show as tags on the patient file and the consultation screen.
- They can be entered at registration (allergy only). There is no screen to edit them afterwards.

### Patient search
The Patients screen searches by name, mobile number or UHID as the user types, with a clear (×) button.
Patients with a recorded allergy carry an "Allergy" tag in the list.

---

## 6. OPD / QUEUE MANAGEMENT

### Token system
- Tokens are numbered `A-01`, `A-02`, … Seeded tokens run A-01 to A-10 (DEMO DATA).
- Each token holds the patient, the doctor, a time and a complaint.
- When reception marks a booked patient **Arrived**, a new token is created in that doctor's queue
  (complaint recorded as "Walk-in") and a message confirms the token number.

### Queue status
Three states, each with its own badge and token colour:

| State | Badge | Meaning |
|---|---|---|
| Waiting | Amber "Waiting" | Arrived and waiting |
| In room | Green "In room" (pulsing token) | Currently with the doctor |
| Seen | Pale green "Seen" | Consultation finished |

### Queue screen
- Filter chips: **All (n)**, **Pending** (waiting + in room), **Seen**.
- A dark **token display** panel shows the token currently in the room for that doctor's OPD room, with a
  **Call next** button (disabled when nobody is waiting).
- Every token row opens the patient file.
- A note on screen describes tokens appearing on a waiting-room screen and the patient's phone; **no
  waiting-room display or patient-phone update exists in the prototype.**

### Patient movement through the queue
- **Call next:** the patient in the room becomes *Seen*, and the first *Waiting* patient becomes *In room*.
- **Start consultation on a waiting patient:** that patient becomes *In room*, and whoever was in the room
  becomes *Seen*.
- **Mark seen & call next patient** (from the prescription): the patient becomes *Seen*, the visit is added
  to the file, and the next waiting patient is called automatically.

---

## 7. APPOINTMENT MANAGEMENT

### Desk booking (Reception → Book)
Four numbered steps on one screen:

1. **Choose doctor** — the three doctors, with department and room; the selected one is outlined.
2. **Choose day** — Today (Tue 11 Aug), Tomorrow (Wed 12 Aug), Thu 13 Aug, Fri 14 Aug.
3. **Choose slot** — 14 fixed times: 09:00, 09:30, 10:00, 10:30, 11:00, 11:15, 11:45, 12:00, 17:00, 17:30,
   18:00, 18:30, 19:00, 19:30. Already-booked slots are greyed and struck through, and cannot be selected.
4. **Patient** — **Existing patient** (picker list, which also offers "Not in the list — register a new
   patient") or **New patient** (quick sheet, with duplicate check).

Once a patient is chosen, a card shows the case type (New / Follow-up), the charge and the reason. The
confirm button reads, for example, **"Confirm 09:30 · ₹700"** and stays disabled until both a slot and a
patient are chosen.

### Slot availability
- Kept **per doctor, per day**. Seeded booked slots for today (DEMO DATA): Dr. Nilesh Patel — 10:00, 11:15,
  12:00; Dr. Rupa Mehta — 10:30, 17:00; Dr. Ketan Shah — 18:00.
- A slot booked at the desk or on the public page is immediately unavailable in both places.
- Each slot holds one appointment per doctor.

### Appointment status
- **Confirmed** — booked, patient not yet arrived (with a **Mark arrived** button).
- **Arrived** — patient has reached the desk; a token has been issued.
- A "Cancelled" badge style exists in the code, but no action in the prototype cancels an appointment.

### Front desk list
- Shows **today's** appointments only, sorted by time, with doctor, case type and charge
  (e.g. "Dr Nilesh Patel · New case · ₹700").
- Bookings made through the public link carry an **Online** tag, and a card explains how many came in through
  the link.
- **Bookings for future days** are saved and block their slot, but are **not listed anywhere** in the
  prototype — the desk list shows today only.

### Appointment requests
The prototype has **no request-and-approve step**. Every booking — desk or online — is **confirmed
immediately** and holds the slot at once. (Inactive code for an approval queue exists but is never shown;
see Appendix B.)

### Online/public booking
See section 12.

---

## 8. CONSULTATION / PRESCRIPTION

### Opening a consultation
From the dashboard, the queue, or a patient file (**Consult** / **Start consultation**). The header card shows
the patient's details, allergy warning, chronic conditions, the case-type badge and reason, and a
**Reports (n)** button.

### Vitals
Blood pressure (mmHg), pulse (/min), temperature (°F), SpO₂ (%) and weight (kg), each typed in. **Pull from
nurse station** fills fixed demo values (146/92, 84, 98.2, 97, 68).

### Complaints
Ten tap-to-select chips (multi-select): Fever, Cough, Body ache, Headache, Abdominal pain, Vomiting,
Giddiness, Breathlessness, Joint pain, Weakness.

### Diagnosis
A free-text box plus ten quick-pick chips: Viral fever, Upper respiratory infection, Acid peptic disease,
Type 2 diabetes — review, Hypertension — review, Migraine, Gastroenteritis, Asthma — mild exacerbation,
Anaemia, Urinary tract infection. **A diagnosis is required** before the prescription can be generated.

### Medicines
- **Add medicine** opens a searchable list of 27 medicines (section 14).
- Choosing one opens a **Dose** sheet:
  - **How to take:** 1-0-0, 0-0-1, 1-0-1, 1-1-1, 0-1-0, SOS (default 1-0-1)
  - **For how long:** 3 days, 5 days, 7 days, 10 days, 15 days, 1 month (default 5 days)
  - **Food:** Before food, After food, Empty stomach (default After food)
- Added medicines are listed with their dose and can be removed.

### Tests advised
A multi-select sheet of 14 tests (section 10); selected tests appear as removable chips.

### Advice and follow-up
Free-text advice, and a follow-up choice: After 3 days, After 7 days (default), After 15 days, After 1 month,
Only if needed.

**Save and see later** returns to the queue. The draft is kept only until a consultation for a different
patient is opened (one draft at a time).

### Prescription
**Finish & make prescription** produces a prescription on the hospital letterhead:
- Header: "S" mark, **Shashvat Hospital**, Junagadh, Gujarat · 0285 262 0011, doctor name, department and
  registration number.
- Patient name, age, sex, UHID, date, vitals (those entered), complaints, diagnosis.
- ℞ section listing each medicine with dose, duration and food instruction.
- Tests advised, advice, follow-up.
- A **"DIGITALLY SIGNED"** stamp with the doctor's name. (This is a visual stamp only; no digital signature
  is applied.)

Actions:
- **Send on WhatsApp** — opens a preview of the message (hospital name, patient, UHID, date, doctor,
  medicines, tests, follow-up, and a line in **Gujarati** telling the patient when to take the medicine and to
  return if the problem worsens). **Send now** shows a confirmation message; **nothing is actually sent.**
- **Print** — shows a message only.
- **Mark seen & call next patient** — see section 6.

### New case / follow-up logic
Applied identically on every screen that shows a charge:

| Situation | Case type | Charge |
|---|---|---|
| Patient has never been consulted here | New case | ₹700 |
| Patient returns to the **same** doctor as last time | Follow-up | ₹400 |
| Patient consults a **different** doctor from last time | New case | ₹700 |

The "last doctor" is updated when a doctor closes a consultation. There is **no time limit** — a follow-up
stays at ₹400 however long ago the last visit was.

### Consultation history
Closing a case adds a visit (date, doctor, diagnosis, advice or "Prescription issued") to the top of the
patient's visit history. The prescription itself is not stored for later re-opening.

---

## 9. BILLING & PAYMENT

### Billing screen
- Tiles: **Collected today** (sum of paid bills) and **Pending** (sum of due bills).
- Buttons: **New bill** and **Close counter**.
- **Today's bills** list, newest first: patient, bill number, time, payment mode, amount, Paid / Due badge.
  Each opens its receipt.

### Creating a bill
1. Start with **New bill** (from Billing or the desk) or **New bill** on a patient file.
2. Choose the patient (existing, or "New patient" with duplicate check).
3. The system decides the doctor (from the patient's appointment today, otherwise the patient's last doctor,
   otherwise the currently selected doctor) and **automatically adds the consultation line** at the correct
   rate, e.g. "Consultation — follow-up (Dr Nilesh Patel) ₹400". A case-type badge and reason are shown.
4. **Add service or test** from the price list (section 14). Adding the same service again increases its
   quantity. Items can be removed.
5. Enter a discount (₹), switch GST on or off, choose a payment mode.
6. **Generate bill · ₹total.**

### Calculation
```
Subtotal      = Σ (rate × quantity)
Taxable       = Subtotal − Discount      (never below 0)
GST           = 18% of Taxable, rounded   (only when GST is switched on)
Total payable = Taxable + GST
```
On the receipt, GST is shown split as **CGST 9%** and **SGST 9%**.

### Payment methods
Cash, UPI, Card, **Pay later**. "Pay later" creates a **Due** bill; every other mode creates a **Paid** bill.
There is no action to collect a due bill later (the owner's "Remind" button only shows a message).

### Discount approval (owner PIN)
- Discounts up to **₹500** are allowed at the counter.
- Above ₹500, generating the bill stops and opens **"Owner approval needed"**, asking for a 4-digit PIN.
- Demo PIN: **1234** (DEMO DATA). A wrong PIN is refused and the bill is not created; the correct PIN issues
  the bill.
- Each bill records who created it (the desk user) and the approval type: *Owner PIN*, *Within limit* or none.
  This appears on the owner's Money screen.

### Invoice / receipt ("Bill ready")
- Letterhead: **Shashvat Hospital**, Junagadh, Gujarat · GSTIN 24AAXCS1234K1ZP (DEMO GSTIN).
- Bill number (format `INV-2608-0nn`), patient and UHID, date and time.
- Item lines, subtotal, discount (if any), CGST/SGST (if GST on), and **Amount paid** or **Amount due**.
- A stamp reading **"PAID · <MODE>"** or **"PAYMENT DUE"**.
- **Send to patient** and **Print** show messages only.
- **Note:** The five seeded demo bills open with a single summary line ("Hospital services") and no discount
  line, because they were created without item details.

### Day-end tally (Close counter)
1. **What the system counted:** cash bills, UPI, card and total collected (from paid bills).
2. **Count the drawer:** enter the cash physically present; UPI and card are not counted by hand.
3. **Check difference:** shows **Drawer matches** (₹0), **Short** (− amount) or **Extra in drawer**
   (+ amount), in green or red.
4. **Carried forward:** the count and total of unpaid bills.
5. **Close the counter for today** (enabled once a figure is entered) produces a **"COUNTER CLOSED · hh:mm"**
   summary: total, cash/UPI/card split, counted by, drawer counted, difference and carried-forward amount.
6. **Reopen the counter** returns to the counting screen.

The messages "summary sent to the owner" and "this is logged" are **displayed only** — the owner's screens do
not show the closed-counter summary, and no log is kept. No rule actually prevents back-dated bills.

---

## 10. LAB / MEDICAL REPORT MANAGEMENT

### Lab tests (advised during consultation)
14 tests can be advised on a prescription (DEMO LIST): Complete blood count (CBC), Blood sugar — fasting & PP,
HbA1c, Lipid profile, Liver function test, Kidney function test, Thyroid profile (TSH), Urine routine,
Chest X-ray, ECG, USG abdomen & pelvis, Vitamin D & B12, Dengue NS1, CRP.

There is **no lab module** — no sample collection, result entry, or lab worklist. Some tests also appear as
billable services (CBC, HbA1c, ECG, Chest X-ray, Sonography).

### Medical report upload (working)
From a patient file (**Upload report**) or from the consultation screen (**Reports → Upload report**):
1. Choose the report type (8 types): **Blood report, X-ray, Sonography, ECG, 2D Echo, CT / MRI, Discharge
   summary, Other document.**
2. **Choose photo or PDF** opens the device's own file picker (on a phone this can include the camera).
3. The file is attached to that patient, dated today, and a confirmation appears.

### Viewing reports
- **Images** open inside the report viewer.
- **PDFs** show the file name and an **Open document** button.
- **Seeded demo reports** (no real file behind them) show a lined placeholder labelled "Scanned copy on file".
- The viewer offers **Add another** and **Close**.
- Reports are visible from both doctor and reception logins.

### Seeded demo reports (DEMO DATA)
HbA1c report, Lipid profile, ECG strip (Jayaben Solanki); USG abdomen (Rakesh Trivedi); Anomaly scan
(Hina Chauhan); Chest X-ray (Devang Bhatt); 2D Echo, ECG (Ashok Parmar).

Uploaded files exist only in the browser's memory and disappear when the page is refreshed or reset.

---

## 11. HOSPITAL FINANCE / REPORTING

The owner's screens mix **live figures** (calculated from what happens during the demo) with **fixed
illustrative figures** (DEMO DATA). Both are listed here.

### Insights screen
| Item | Live or fixed |
|---|---|
| OPD today (number of tokens) | Live |
| Consultations done | Live |
| Average waiting (14 min) | Fixed |
| Doctors on duty (3) | Fixed |
| Footfall — last 7 days bar chart (Wed 64, Thu 71, Fri 58, Sat 83, Sun 39, Mon 92, Tue 74), busiest day highlighted, with a written observation | Fixed |
| "Where patients go" — department share bars (General Medicine 42%, Gynaecology 23%, Orthopaedics 18%, Pathology 11%, Others 6%) | Fixed |
| Most common diagnoses (Viral fever 38, Acid peptic disease 26, Type 2 diabetes 21, Hypertension 19, Back pain 14) | Fixed |

### Money screen
| Item | Live or fixed |
|---|---|
| Collection today, number of paid bills, pending amount | Live |
| Monthly collection chart in ₹ thousand (Apr 412, May 468, Jun 439, Jul 521, Aug 233) | Fixed |
| How patients pay — UPI 46%, Cash 34%, Card 14%, Insurance 6% | Fixed (Insurance is not a billing option) |
| **Discounts given today** — patient, bill no., staff name, "approved with your PIN" or "within counter limit", amount; total at top | Live |
| **Pending dues** — each due bill with a **Remind** button (message only) | Live |
| **Doctor-wise** — per doctor: new-case and follow-up counts and consultation value from today's queue | Live |

### Doctor payouts
Per doctor: share %, **collected this month**, of which today, hospital keeps, **pay the doctor**, and a
**Mark ₹… paid** button (message only). A dark header shows the total payable to doctors and the amount the
hospital keeps.

```
Collected this month = fixed month-to-date figure (DEMO DATA) + today's consultation charges from the queue
Pay the doctor       = Collected this month × doctor's share %, rounded
Hospital keeps       = Collected this month − Pay the doctor
```
Only consultation charges from the queue are counted toward today's portion; tests and procedures are not.

### Cash / UPI / Card tracking
Every bill records its payment mode. The day-end tally uses the live split of paid bills by Cash, UPI and
Card (section 9).

---

## 12. PUBLIC / PATIENT ONLINE BOOKING

Opened from **Book an appointment** under "Public link · what a patient sees" on the login screen (or
**Patient link** on the desktop role switch). It is presented inside a mock browser address bar showing
`shashvat.care/book`, with the hospital's name and "Book an OPD appointment". It has **no staff tabs, no
notifications, no account button**. A four-step progress indicator (Doctor · Time · Mobile · Details) shows
where the patient is.

### Step 1 — Doctor selection
The three doctors with department and room. An information card states OPD timing (9 AM – 1 PM · 5 – 8 PM),
consultation charges (₹700 new · ₹400 follow-up) and that **nothing is paid online**.

### Step 2 — Date and time-slot selection
- The chosen doctor, with a **Change** button.
- Day chips: Today, Tomorrow, Thu, Fri.
- A count of open slots, and the same 14-slot grid used at the desk; taken slots are struck through and
  cannot be tapped. Availability is shared live with the desk.
- **Continue with hh:mm** (disabled until a time is chosen).

### Step 3 — Mobile verification (OTP)
1. Enter mobile number (at least 10 digits) → **Send code**.
2. Enter the 4-digit code → **Verify and continue**. **Demo code: 4321** (DEMO DATA; no SMS is sent). A wrong
   code is refused.
3. **Change the number** is available after sending.

### Step 4 — Patient information
- **If the mobile number already belongs to a patient,** the page shows "This number is already registered"
  with the patient's name, age and sex, the case type and the charge — and **no form**.
- **If not,** it asks for name (required), age and sex.
- Optional "What is the problem?" field.
- **Confirm booking.** A note repeats that no payment is taken now and states the amount to pay at the
  counter.

### Booking confirmation
- "Appointment confirmed" with a **booking reference** in the format `SHB-4821`, `SHB-4822`, …
- Patient, doctor, department, day and time, room, **amount to pay at the counter**, and whether it is the
  first visit with this doctor.
- "Before you come": arrive 10 minutes early, give the reference, bring old reports; call 0285 262 0011 to
  reschedule or cancel.
- **Book another appointment.**
- The page states that a confirmation message was sent; **no message is actually sent.**

### What happens on the staff side
- The booking is **confirmed instantly** (no approval step) and appears on the Front desk list with an
  **Online** tag, the case type and charge — provided it is for today (see section 7).
- A new patient booking online gets a patient file with a UHID automatically.
- The slot immediately becomes unavailable on both the public page and the desk.
- The desk then handles the patient normally: **Mark arrived** → token → consultation → bill.

### Privacy boundary as built
The public page never displays visit history, reports, prescriptions, bills, allergies or UHID, even for a
recognised patient.

---

## 13. USER INTERFACE & EXPERIENCE

### Overall visual design
- Dark teal-black header bars with an animated **ECG line** running along the bottom edge; light grey-green
  content area; white rounded cards with soft shadows.
- Colour meanings: teal for primary actions and "done"; amber for waiting/due; red for allergies, shortfalls
  and dues; violet for "New case" and "Online".
- Fonts (loaded from Google Fonts): **Bricolage Grotesque** (headings), **Instrument Sans** (body),
  **Martian Mono** (numbers, tokens, amounts, times), **Noto Sans Gujarati** (Gujarati text).
- Amounts use Indian formatting (₹4,100; ₹2,30,320).
- Line icons drawn in code (home, queue, users, chart, calendar, bill, bell, stethoscope, file, lock, link…).

### Desktop behaviour (screen 820 px wide and above)
- The app appears inside a **phone-shaped frame** in the centre of a dark background.
- A top bar shows **Shashvat Hospital · staff console · demo build**, a **role switch** (Doctor · Reception ·
  Admin · Patient link) and a **Reset demo** button.

### Mobile behaviour (below 820 px)
- The app fills the whole screen; the page scrolls normally with one finger.
- The header stays fixed at the top while scrolling; the bottom tab bar is fixed to the bottom.
- Short screens and the login screen fill the full height with no gap underneath.
- Pull-to-refresh is contained so a downward swipe does not reload the page.
- The page is set up to launch full-screen when added to a phone's home screen, with an ECG icon.

### Navigation
- Login screen → role; person icon (top right) returns to the login screen.
- Bottom tabs per role (4 each); the relevant tab stays highlighted on sub-screens.
- **Back** links on sub-screens.
- The public page has its own step-based navigation and no tabs.

### Common components
- **Metric tiles** (dashboard numbers), **list rows** (patients, tokens, bills), **badges**, **chips**
  (filters, complaints, days, slots, payment modes), **timeline** (visit history), **bar charts** (animate on
  open), **letterhead documents** (prescription, receipt) with rotated stamps.
- **Forms** with labelled fields and a teal focus ring.
- **Bottom sheets** slide up for pickers, dose selection, tests, uploads, PIN, duplicates, notifications,
  WhatsApp preview and report viewer; tapping the dimmed background or pressing Escape closes them, and the
  page behind is locked while a sheet is open.
- **Toast messages** appear briefly at the bottom to confirm actions or explain errors.
- **Notifications** (bell icon) — four fixed demo alerts.
- **Time slots**: open slots have a light green tint, the selected slot is dark, taken slots are grey and
  struck through.

### Accessibility notes as built
Reduced-motion preferences are respected (animations are switched off). Icon-only buttons (bell, person)
have no screen-reader labels, and no other accessibility features were added.

---

## 14. DEMO DATA & PROTOTYPE LOGIC

> **All data in this section is DEMO / PROTOTYPE DATA.** The patients are fictional sample records, not real
> hospital records. The hospital phone number and GSTIN are placeholders.

### Hospital information (DEMO)
Name **Shashvat Hospital**; address Junagadh, Gujarat; phone 0285 262 0011; GSTIN 24AAXCS1234K1ZP;
24 beds, 3 doctors (shown on Setup); plan "Demo — full features open"; "Data location: India (Mumbai
region)" and "Daily backup: 2:00 AM, automatic" (text only — nothing is stored or backed up). Demo date:
**11 Aug 2026**.

### Doctors (DEMO)
See section 4. Month-to-date collection figures: ₹2,14,000 / ₹1,56,000 / ₹98,000.

### Patients (DEMO — 10 records)

| UHID | Name | Age/Sex | Allergy | Chronic | Last doctor | Visits | Reports |
|---|---|---|---|---|---|---|---|
| SH-00841 | Jayaben Solanki | 62 F | Sulfa drugs | Type 2 diabetes, Hypertension | Dr. Nilesh Patel | 3 | 3 |
| SH-01130 | Rakesh Trivedi | 41 M | — | Acidity | Dr. Nilesh Patel | 1 | 1 |
| SH-01402 | Hina Chauhan | 29 F | Penicillin | — | Dr. Rupa Mehta | 1 | 1 |
| SH-01555 | Imran Kadri | 35 M | — | — | — | 0 | 0 |
| SH-01610 | Devang Bhatt (guardian: father, Ripal Bhatt) | 8 M | — | Asthma | Dr. Nilesh Patel | 1 | 1 |
| SH-00219 | Ashok Parmar | 70 M | Aspirin | Coronary artery disease, Hypertension | Dr. Nilesh Patel | 2 | 2 |
| SH-00977 | Manjula Vaghela | 55 F | — | Hypothyroidism | Dr. Nilesh Patel | 1 | 0 |
| SH-01288 | Bhavesh Kanabar | 47 M | — | — | — | 0 | 0 |
| SH-01377 | Priya Dave | 33 F | — | — | Dr. Rupa Mehta | 1 | 0 |
| SH-01498 | Nita Joshi | 38 F | — | Migraine | — | 0 | 0 |

Each record also has a demo mobile number and blood group.

### Queue (DEMO — today)
A-01 to A-04 seen (Dr. Nilesh Patel); A-05 Jayaben Solanki in room; A-06 to A-08 waiting (Dr. Nilesh Patel);
A-09 Hina Chauhan and A-10 Priya Dave waiting (Dr. Rupa Mehta).

### Appointments (DEMO — today)
11:30 Imran Kadri (Arrived), 11:45 Bhavesh Kanabar (Arrived), 12:00 Nita Joshi, 12:15 Hina Chauhan,
12:30 Priya Dave (Confirmed), 16:30 Rakesh Trivedi with Dr. Ketan Shah (Confirmed).

### Bills (DEMO — today)
| Bill | Patient | Amount | Mode | Status | Discount |
|---|---|---|---|---|---|
| INV-2608-041 | Ashok Parmar | ₹1,250 | UPI | Paid | ₹250 (within limit) |
| INV-2608-042 | Manjula Vaghela | ₹300 | Cash | Paid | — |
| INV-2608-043 | Rakesh Trivedi | ₹1,650 | Card | Paid | ₹600 (owner PIN) |
| INV-2608-044 | Devang Bhatt | ₹900 | UPI | Paid | — |
| INV-2608-045 | Jayaben Solanki | ₹2,100 | — | Due | — |

Starting figures: ₹4,100 collected, ₹2,100 pending.

### Service price list (DEMO)
Consultation — new case ₹700 · Consultation — follow-up ₹400 · Injection charge ₹150 · Dressing ₹250 ·
ECG ₹400 · Chest X-ray ₹350 · Sonography ₹900 · CBC ₹350 · HbA1c ₹550 · IV drip ₹600 · Nebulisation ₹300 ·
Suturing — minor ₹800 · Room charge — general ward ₹1,500.

### Medicines (DEMO — 27)
Paracetamol 650 mg, Pantoprazole 40 mg, Amoxicillin 500 mg, Azithromycin 500 mg, Cefixime 200 mg,
Metformin 500 mg, Telmisartan 40 mg, Amlodipine 5 mg, Atorvastatin 10 mg, Cetirizine 10 mg,
Levocetirizine 5 mg, Montelukast 10 mg, Ibuprofen 400 mg, Aceclofenac 100 mg, Diclofenac 50 mg,
Ondansetron 4 mg, Domperidone 10 mg, Rabeprazole 20 mg, Metronidazole 400 mg, Thyroxine 50 mcg,
Vitamin D3 60000 IU sachet, Iron + Folic acid, Calcium + D3, ORS powder sachet, Salbutamol inhaler 100 mcg,
Cough syrup 100 ml, Insulin Glargine 100 IU/ml.

### Staff (DEMO — Team screen)
Dr. Nilesh Patel (On duty), Dr. Rupa Mehta (On duty), Dr. Ketan Shah (Evening OPD), Kinjal Rathod —
Reception (On duty), Sister Alka — Nursing OPD (On duty), Sister Rekha — Nursing ward (Night shift),
Mahesh Odedra — Pharmacy (On duty), Jignesh Vala — Lab technician (Leave). **Add staff member** is a
placeholder.

### Notifications (DEMO — fixed)
2D Echo report uploaded (Ashok Parmar); Bill INV-2608-045 marked due; 2 appointments added by the evening
desk; Pharmacy: Pantoprazole low stock (11 strips left).

### Demo credentials and codes (DEMO)
| Item | Value |
|---|---|
| Owner PIN for discounts above ₹500 | **1234** |
| OTP on the public booking page | **4321** |
| Staff login | None — pick any role |

### Business rules configured in the demo
New case ₹700; follow-up ₹400; different doctor = new case; counter discount limit ₹500; GST 18% (CGST 9% +
SGST 9%) when switched on; duplicate match = same mobile, or same/reversed name within 2 years of age.

### Setup screen switches (DEMO — display only)
Eight switches are shown: *Records are staff-only* (On), *Public booking link* (On), *Send copies from
hospital number* (On), *Automatic consultation charge* (On), *GST on bills* (On), *Gujarati on patient copy*
(On), *Doctor sees only own patients* (On), *Audit trail* (Off). **Tapping any switch only shows "Not in this
demo — part of the full build"; none of them changes how the prototype behaves.**

### How the prototype keeps data
- Everything is held in the browser's memory for the current session only.
- Nothing is saved to a server, database or the device. Refreshing the page, or **Reset demo**, restores the
  original demo data.
- All roles run in the same browser session; switching roles shows the same shared demo data, which is how
  one person can demonstrate a desk action appearing on the doctor's or owner's screen.

---

## 15. COMPLETE USER WORKFLOWS

### 15.1 New patient registration (desk)
1. Reception → **Patients** → **Register new patient** (or **Register** on the desk).
2. Enter name, age, sex, mobile, blood group, allergy (and address).
3. **Save patient & give UHID.**
4. If a possible duplicate is found → choose the existing file, or confirm it is a different person.
5. The new patient file opens with a UHID; the first visit will be charged as a new case (₹700).

### 15.2 Existing patient visit
1. Reception searches by name, mobile or UHID and opens the file.
2. The file shows case type and last doctor; **New bill** starts a bill with the correct consultation charge.

### 15.3 Desk appointment
1. Reception → **Book** → doctor → day → slot.
2. **Existing patient** or **New patient** (or register from inside the picker).
3. Check the case type and charge → **Confirm hh:mm · ₹amount**.
4. The appointment appears on the desk list (if for today); the slot is taken for that doctor.

### 15.4 Arrival and queue
1. Desk → **Mark arrived** on a confirmed appointment.
2. A token (A-nn) is created in that doctor's queue.
3. Doctor → **Queue** → **Call next**, or **Start consultation** from the dashboard.

### 15.5 Doctor consultation and prescription
1. Open the consultation; review allergy, chronic conditions, case type and reports.
2. Record vitals (or pull demo vitals), complaints, diagnosis (required), medicines with dose, tests, advice
   and follow-up.
3. **Finish & make prescription** → review the letterhead prescription.
4. Optional: **Send on WhatsApp** (preview) or **Print** (message).
5. **Mark seen & call next patient** → visit added to history, last doctor updated, next token called.

### 15.6 New case / follow-up in practice
1. Book Jayaben Solanki with Dr. Nilesh Patel → **Follow-up ₹400** ("Seen earlier by Dr. Nilesh Patel on
   14 Jul 2026").
2. Change the doctor to Dr. Rupa Mehta → **New case ₹700** ("Different doctor from last time…").

### 15.7 Billing and payment
1. **Billing** → **New bill** → choose patient → consultation line added automatically.
2. Add services/tests, set discount, GST on/off, payment mode.
3. **Generate bill** → receipt with PAID or PAYMENT DUE stamp.
4. The bill appears in Today's bills and in the owner's figures.

### 15.8 Discount approval
1. Enter a discount above ₹500 → **Generate bill**.
2. "Owner approval needed" → enter the PIN (**1234**) → **Approve discount**.
3. The bill is issued; the discount appears on the owner's Money screen as "approved with your PIN" with the
   staff name.

### 15.9 Day-end counter tally
1. **Billing** → **Close counter**.
2. Review system totals → enter cash counted → **Check difference**.
3. **Close the counter for today** → closed summary with difference and carried-forward dues.
4. Optional **Reopen the counter**.

### 15.10 Medical report upload and viewing
1. Patient file → **Upload report** (or Consultation → **Reports** → **Upload report**).
2. Choose type → **Choose photo or PDF** → select the file.
3. The report is listed on the file; tap to view (image preview / open PDF).

### 15.11 Patient history review
Patient file → Visit history timeline and Reports & files; also reachable from the consultation header
(**History**, **Reports**).

### 15.12 Public online booking
1. Patient opens the link → chooses doctor → day and time → enters mobile → **Send code** → enters code →
   **Verify**.
2. Recognised number: details skipped, charge shown. New number: enters name, age, sex.
3. **Confirm booking** → reference SHB-nnnn and amount to pay at the counter.
4. Desk sees the appointment tagged **Online**; the slot is gone for everyone else.

### 15.13 Owner review
Owner → **Insights** (footfall, departments, diagnoses) → **Money** (collection, payment mix, discounts, dues,
doctor-wise) → **Payouts** → **Team** → **Setup**.

### 15.14 Viewing the system as another doctor
Doctor → **Me** → **Switch doctor (demo)** → queue, dashboard and case types now reflect that doctor.

---

## 16. WHAT THIS PROTOTYPE REPRESENTS

- **Kind of system:** An OPD-focused hospital management system for a small-to-mid-sized multi-doctor
  hospital, used mainly on phones, with a patient-facing booking page.
- **Processes it brings together:** appointments (desk and online), registration with duplicate control,
  queueing, consultation and prescription, patient records and reports, billing with GST and discount
  control, day-end cash reconciliation, owner-level collection and doctor payout views.
- **What it lets stakeholders understand:** the proposed screens and flow for each role; how the ₹700/₹400
  consultation rule would be applied automatically everywhere; how one role's action appears for another
  (online booking → desk → queue → doctor → bill → owner); and where controls such as the discount PIN,
  duplicate check and cash tally would sit.
- **How users interact:** Reception feeds the system (bookings, arrivals, bills); doctors work from the queue
  and add clinical records; the owner watches and approves; patients only book.

---

## 17. PROTOTYPE VS PRODUCTION SYSTEM

### A. Actually demonstrated in this prototype
- Four roles (Doctor, Reception, Owner, Public booking) with separate screens and navigation.
- Doctor-wise OPD queue with call-next and status changes.
- Full consultation with vitals, complaints, diagnosis, medicines with dosage, tests, advice, follow-up.
- Prescription on letterhead, including a Gujarati instruction in the WhatsApp preview.
- Patient registration with UHID, search, patient file, allergy/chronic display, visit history.
- Duplicate detection with override.
- Automatic new-case/follow-up charging with the different-doctor rule.
- Per-doctor, per-day slot availability shared between desk and public page.
- Desk booking with inline patient creation.
- Public booking with OTP step, existing-patient recognition, instant confirmation and booking reference.
- Billing with price list, auto consultation line, discount, 18% GST split, four payment modes, receipts.
- Owner PIN for discounts above ₹500, and a discount log with staff names.
- Day-end cash tally with short/extra calculation and a closed summary.
- Real file upload (photo/PDF) and viewing per patient, within the session.
- Owner insights, money, payouts, team and setup screens.
- Responsive phone/desktop layout.

### B. Required for a real production application
- Permanent storage of all data (nothing is saved in the prototype).
- Real sign-in for each staff member; roles are freely switchable in the prototype.
- Real sending of OTP, WhatsApp, SMS and reminders (all simulated).
- Real printing of prescriptions, receipts and UHID cards (simulated).
- Several people working at once on different devices (the prototype is one session in one browser).
- Screens to add/edit doctors, staff, timings, prices and hospital settings (placeholders or absent).
- Working setup switches (display-only in the prototype).
- Cancelling and rescheduling appointments; a view of future-day appointments.
- Collecting payment on due bills.
- A real audit log (the prototype's "this is logged" message is not backed by a log).
- Editing allergies and chronic conditions after registration; saving the address field.
- Actual digital signing of prescriptions (the stamp is visual).
- Any in-patient, pharmacy stock, lab result or insurance modules (not modelled).

---

## 18. Future Production Requirements — NOT PART OF THIS PROTOTYPE

> None of the items below exists in the current prototype. They are the genuine requirements to consider when
> building the real application.

**Backend and data**
- A production backend and database holding patients, visits, prescriptions, appointments, bills, reports,
  staff and settings.
- Server-side calculation of charges, GST, discounts and payouts, so figures cannot be altered in the browser.
- Real-time updates across devices (desk, doctor rooms, owner's phone, booking page).
- Concurrency control so the same slot cannot be booked twice when two people book at the same moment.

**Access and security**
- Individual staff accounts with secure sign-in, session timeout and password/PIN policies.
- Role-based access control — e.g. reception cannot open clinical notes; doctors see only their patients
  (both shown as switches in the prototype's Setup but not enforced).
- Securely stored owner approval PIN (the demo PIN is fixed in the page code).
- Encryption of data in transit and at rest; protection of medical records as sensitive personal data.
- Compliance review against applicable Indian law on personal and health data (e.g. the Digital Personal
  Data Protection Act, 2023) and applicable medical-record and prescription rules.
- Rate limiting and bot protection on the public booking page.

**Records and accountability**
- A tamper-evident audit trail: who created, edited, discounted, reopened or deleted what, and when.
- Rules preventing back-dated bills after the counter is closed.
- Retention and deletion policies for medical records.

**Files**
- Production storage for uploaded reports (images and PDFs), with size limits, virus scanning, access control
  and backup.

**Integrations**
- An approved SMS/OTP provider with DLT-registered templates for OTP and appointment messages.
- WhatsApp Business API with approved templates for prescriptions, bills and reminders (with patient consent).
- Email, if required.
- Printer support for prescriptions, receipts and UHID cards/labels.
- Payment gateway or UPI integration only if online payment is later required (the prototype takes no
  payment online).

**Operations**
- Hosting and deployment with SSL on the hospital's own domain.
- Automated daily backups with tested restore.
- Monitoring, error logging and uptime alerts.
- Scalability for more doctors, departments or branches.
- Offline or poor-network behaviour at the desk, if required.

**Administration**
- Management screens for doctors, timings, leave, slot length and capacity, departments, service prices,
  consultation rules (including any follow-up validity period), discount limits and hospital details.
- Appointment cancellation, rescheduling, no-show handling and reminders.
- Due-bill collection, refunds and credit notes.
- Exportable reports (daily collection, GST summary, doctor payouts).

---

## 19. CLIENT-FACING OBJECTIVE SUMMARY

This prototype was created to show Shashvat Hospital how its OPD could run on one simple system used from
phones. It is designed for four groups: **reception staff**, who book appointments, register patients and
handle billing; **doctors**, who work through their own queue and write prescriptions; the **owner**, who
sees collection, discounts, dues and doctor payouts at any moment; and **patients**, who can book their own
slot through a web link without installing anything or seeing any records.

It brings together appointments, registration, the OPD token queue, consultation and prescription, patient
history and reports, billing with GST and discount approval, the day-end cash tally, and owner reporting —
and shows how an action by one person immediately appears for the others. Rules the hospital cares about,
such as ₹700 for a new case and ₹400 for a follow-up, a new charge when the doctor changes, owner approval for
discounts above ₹500, and protection against duplicate patient files, are demonstrated working.

The prototype is intended as a shared reference: the hospital can review each screen and workflow, confirm
what should stay, change or be added, and the final application can then be built to those confirmed
requirements.

---

## 20. IMPORTANT PROTOTYPE DISCLAIMER

- **This is a prototype / demonstration**, not a finished product.
- **All information displayed is demo data.** Patients, doctors, staff, bills, reports, figures, the hospital
  phone number and the GSTIN are sample values. Patient records shown are fictional, not real hospital records.
- **It is not a live hospital management system.** It does not store data, does not send messages, OTPs or
  WhatsApp, does not print, does not take payments, and does not secure access. Refreshing the page restores
  the original demo data.
- It must **not** be used to record or manage real patients.
- The prototype is intended to **demonstrate the proposed workflows, screens and functionality** only.
- **The final production application will be developed according to the client's confirmed requirements**,
  which may differ from this prototype.

---

## Appendix A — Messages that are simulated, not performed

These buttons or screens show a confirmation, but perform no real action in the prototype:

| Where | What the screen says or does | What actually happens |
|---|---|---|
| Prescription → Send now | "Prescription sent to the patient" | Nothing is sent |
| Prescription / Receipt → Print | "Sent to the counter printer" | Nothing is printed |
| Receipt → Send to patient | "Bill sent to the patient on WhatsApp" | Nothing is sent |
| Patient file → Call | "Calling …" | No call is placed |
| Doctor dashboard → Blank Rx | "Blank prescription opened" | No prescription opens |
| Money → Remind | "Payment reminder sent to …" | Nothing is sent |
| Payouts → Mark ₹… paid | "… marked paid" | Nothing is recorded |
| Public page → Send code | "Code sent to …" | No SMS; the code is always 4321 |
| Public confirmation | "A confirmation message has been sent" | Nothing is sent |
| Close counter | "Summary sent to the owner" | Owner screens do not show it |
| Reopen counter | "Counter reopened — this is logged" | No log is kept |
| Consultation → Pull from nurse station | "Vitals pulled from nurse station" | Fixed demo values are filled |
| Registration screen note | "A UHID card is printed at the desk" | Nothing is printed |
| Change timing, Add staff member, all Setup switches | "Not in this demo — part of the full build" | Placeholder |
| Note under the prescription | Describes the prescription reaching pharmacy and lab counters | No pharmacy or lab module exists |
| Note on the queue screen | Describes a waiting-room screen and the patient's phone | Neither exists |
| Setup → Data location / Daily backup | "India (Mumbai region)", "2:00 AM, automatic" | Descriptive text only |

---

## Appendix B — Inactive code found during analysis

The following items exist in `index.html` but are **never executed or displayed**. They do not affect the
prototype's behaviour and are recorded here only so that the documentation is complete and accurate. They were
**not** changed.

- Unused state for an alternative public-booking design (`pub`) and two sample "appointment requests"
  (`REQ-4471` Sanjay Rathod, `REQ-4472` Falguni Dave). No screen reads or shows them.
- Two unused slot-capacity functions (`slotSeats`, `slotState`) describing up to three seats per slot. The live
  prototype uses one appointment per doctor per slot.
- A second, unreachable public-page branch in the screen-drawing function that refers to a function
  (`pubShell`) which does not exist. It can never run because an earlier branch always handles the public page.
- Unused style rules for that alternative public page (`.pub…`, `.pstep…`, `.doccard`, `.daycard`,
  `.slotgrid`, and related). **One of them, `.slot`, is active:** it gives open time-slot chips their light
  green tint on both the desk and public booking screens.

---

*End of document.*
