# Slim 'n Slender — Diet & Patient Management Prototype

**Prepared by:** Sangam InfoAnalytics, Junagadh
**Prepared for:** Dr. Nitee Gadhvi, Slim 'n Slender
**Prototype file:** `slim-n-slender-prototype.html` (revision 2, after the client meeting of 28 August 2026)
**Document purpose:** A complete description of what the prototype contains, what it demonstrates, and what would still be required to build the real application.

---

## Executive Summary

Slim 'n Slender is a diet and patient management system designed to replace the paper files used today at Dr. Nitee Gadhvi's clinic in Junagadh.

The prototype shows two sides of one system:

- **The dietician's side**, used on a laptop, tablet or phone. The dietician registers patients, sees each patient's full journey and weight trend, builds diet plans from her own approved food list, keeps every past plan on record, prints any plan as a diet chart, and tracks payments of ₹600 per diet plan.
- **The patient's side**, used on the patient's own phone. The patient sees today's plan meal by meal, ticks off meals as she eats them, sees the nutrition of each food as a picture, follows her weight progress, opens any of her past plans, and sees what she has paid and when her next visit is.

The whole application can be switched between **English and Gujarati** with one button.

**This is a working prototype, not the finished product.** Every screen can be opened and clicked, the diet plan builder calculates nutrition live, and diet charts genuinely print to PDF. All the patients and records inside it are invented samples, nothing is saved permanently, and features such as sending WhatsApp messages, downloading Excel files and recording payments are demonstrated rather than connected to real services. Section 12 lists exactly what is demonstrated and what is real.

---

## Table of Contents

1. Project Overview
2. User Types
3. Doctor / Dietician Portal
4. Patient Portal
5. Diet Management
6. Patient Management
7. Diet Plan Workflow
8. Patient Experience
9. Language Support
10. Printable Diet Chart
11. Business Benefits
12. Prototype vs Production
13. Future Production Requirements
14. Client Confirmation Checklist

---

## 1. Project Overview

### What Slim 'n Slender is

Slim 'n Slender is a dietician clinic run by Dr. Nitee Gadhvi in Junagadh, Gujarat. The prototype is the proposed software for that clinic: a single system in which the dietician manages patients and diet plans, and each patient follows her own plan from her phone.

### Purpose of the system

To move the clinic from paper files to a digital record where every patient's history, every diet plan, every weight reading and every payment is kept in one place, and where the patient can see her own plan and progress without needing a paper chart.

### Main problems it addresses

| Problem today (paper) | How the prototype addresses it |
|---|---|
| Finding a patient's old file and reading back through it at every visit | Patient file shows the whole journey, weight chart and current plan on one screen |
| Rewriting a diet plan by hand for each visit | Plan builder with a fixed food list, live calorie totals and templates |
| Previous plans lost or overwritten | **Plan history** keeps every plan from the first visit to the latest, each openable in full and printable |
| Patient cannot see her own progress | Patient portal with weight chart, goal bar and weekly adherence graph |
| Nutrition values vary or are guessed | Every food item carries fixed values and its own nutrition pie chart |
| Tracking who owes for diet plans | Payment panel: ₹600 per plan, dues settled after every 4 plans |
| Rural patients who read only Gujarati | Whole application switchable to Gujarati |
| Records lost to damage or accidental deletion | Recycle bin, backup log and change log screens (demonstrated — see Section 12) |

### How it supports dietician and patient management

The dietician's work is organised around a daily dashboard that surfaces who needs attention (follow-ups due, weights not recorded, payments due), with each patient's full file one tap away. The patient's side is organised around "today's plan", with progress, history, payments and exercise available from a bottom tab bar.

---

## 2. User Types

The prototype demonstrates two users. A switch in the top demo bar labelled **Doctor / Patient** moves between them.

### 2.1 Doctor / Dietician

Shown in the prototype as **Dr. Nitee Gadhvi, Consulting dietician**.

The dietician can:

- Sign in to the clinic
- See the daily dashboard with attention alerts
- Search and open patient files
- Register a new patient
- View a patient's weight history, BMI, progress towards goal and plan adherence
- Build, edit and issue diet plans from her own food list
- Load one of four starting templates in the plan builder
- Open the full **plan history** of any patient: every plan ever given, with dates, weights, calories and charges
- Compare any two past plans and see exactly what was added, removed or changed
- Open any past plan in full, print it as a diet chart / PDF, or print every past plan as one document
- Start a new plan from an old one
- Browse the food list with a nutrition pie chart for every item
- Browse the recipe and exercise libraries
- See the payment and dues position for every patient and record a payment
- Prepare a WhatsApp message with payment status and next visit date
- See the recycle bin, backup history and change log
- Switch the application between English and Gujarati

### 2.2 Patient

Shown in the prototype as **Meera Trivedi**.

The patient can:

- Sign in with her mobile number and a 6-digit PIN
- See today's plan, meal slot by meal slot, with timings and calories
- Tick off each meal as she takes it, and watch the day's progress ring fill
- Open a meal to see every item with its own nutrition pie chart, and the recipe for it
- See her progress: weight lost, goal percentage, weekly loss, BMI, weight chart and adherence graph
- See every plan she has ever been given, and open any of them in full
- Print or save any of her plans as a diet chart
- See her payment position, receipts and next visit date
- See the exercises assigned to her
- Use the application in Gujarati

The patient **cannot** create or change plans, and does not see the "start a new plan from this" option that the dietician has.

---

## 3. Doctor / Dietician Portal

### 3.0 Layout and navigation

**On a laptop or tablet** a dark green sidebar on the left holds the navigation, grouped under four headings:

| Group | Screens |
|---|---|
| Daily work | Today · Patients · Diet plan |
| Your libraries | Food list · Recipes · Exercises |
| Money & history | Plan history · Payments |
| Safety | Backup & safety (with a badge showing 3 items in the recycle bin) |

The sidebar footer shows the signed-in user: *Dr. Nitee Gadhvi, Consulting dietician*.

**On a phone** (screens narrower than 900 px) the sidebar is replaced by a bottom tab bar: **Today · Patients · Diet plan · Payments · More**. "More" opens a sheet with Food list, Recipes, Exercises, Plan history, Payments, Backup & safety, Register a patient, All screens and Reset the demo. Data tables turn into tappable cards on a phone.

A top **demo bar** (present only in the prototype) contains: the Doctor / Patient switch, the English / ગુજરાતી language switch, an **All screens** button, and **Reset demo**.

### 3.1 Sign in

A two-column screen: clinic branding and the line *"Every patient file, every diet chart, every kilo — in one place"* on the left; a sign-in form on the right with mobile number and password, already filled with demo values. A note tells the viewer this is a demonstration. Pressing **Sign in to my clinic** enters the dashboard.

### 3.2 Today (dashboard)

The landing screen, dated *Thursday, 3 September 2026* in the demo.

- **Four summary tiles:** Patients on an active plan · Due for follow-up · No weight this week · Payments due (the payments tile opens the Payments screen)
- **Needs your attention:** patients whose follow-up is due or whose weight has not been recorded this week, each with a status pill and current weight
- **Best progress this month:** the patient with the most weight lost, with a progress bar and an "Open her file" button
- **Everyone on an active plan:** a table of all active patients — started weight, current weight, kilograms lost and a bar showing progress towards target

Buttons: **All patients**, **+ New patient**.

### 3.3 Patients

A searchable list of all 8 sample patients. Columns: patient (with age and phone), with you since, start weight, current weight, kilograms lost, average loss per week, and status (**On plan** or **Maintenance**). Typing in the search box filters the list by name. Clicking a row opens the patient file.

### 3.4 Patient file

The digital replacement for the paper file. Header shows name, age, food preference, phone and enrolment date.

**Header buttons:** Download diet chart · Send on WhatsApp · Plan history · Edit her plan

**Four tiles:** Weight now · Lost so far (with average per week) · BMI today (with height) · Towards goal (with kilograms still to go)

**Sections:**

- **Weight, week by week** — line chart of every weight reading since the first visit, with the target weight shown as a dashed line
- **Following the plan** — bar chart of adherence over the last 7 weeks, coloured green (good week), amber (slipped a little) and red (needs a talk)
- **Her journey** — timeline of key events (plan issued, weight recorded, plan revised, report uploaded, first visit), with a button to open all visits in Plan history
- **Plan running now** — a nutrition donut for the current plan's daily calories, the protein / carbohydrate / fat / fibre totals, and the dietician's private note about the patient
- **Her account** — plans given, paid till date, due now, the current 4-plan cycle, last payment date, and a note that consultation is billed separately; buttons to record a payment or open the payment panel
- **Next follow-up** — the next visit date, with a button to see the WhatsApp message

### 3.5 Register a new patient

Described in the prototype as *"This replaces the front page of the paper file"*.

- **Who she is:** Full name, Mobile number, Age, Food preference (Vegetarian / Non-vegetarian / Jain / Eggetarian)
- **Where she is starting from:** Height (cm), Weight today (kg), Target weight (kg)
- **Medical notes and allergies** (free text)
- **Your own note about her** (free text)
- **Consent** — a checkbox confirming the patient agrees to her records being stored
- **What happens next** — explains that her file opens immediately, a 6-digit PIN is generated for her phone, and she sees nothing until her first plan is issued

Saving is demonstrated (a confirmation message appears); no record is actually created.

### 3.6 Diet plan builder

The screen where the dietician spends most of her time.

- A patient selector at the top, plus **Save as template** and **Issue this plan**
- **Seven meal slots**, each showing its time and a running calorie total:
  Early morning (6:30 am) · Breakfast (8:30 am) · Mid-morning (11:00 am) · Lunch (1:30 pm) · Evening (4:30 pm) · Dinner (8:00 pm) · Bedtime (10:00 pm)
- Each slot lists its food items with quantity, household measure and calories, and each item can be removed
- Each slot has an **"Add from your food list…"** dropdown, grouped by food category. **Only foods from the approved food list can be added.** Adding an item already in the slot increases its quantity
- **Side panel — "The day adds up to":** a live donut of the day's calories, the difference from the calorie target, and protein / carbohydrate / fat / fibre totals, all recalculated instantly as items change
- **Start from a template:** 1200 kcal vegetarian · PCOS — low glycaemic · Post-delivery 1500 kcal · Thyroid — steady loss (loading a template is demonstrated with a message)
- **Exercises assigned** to the patient, with a link to change them

Pressing **Issue this plan** saves the plan for the patient within the current session and returns to her file.

### 3.7 Plan history *(added after the meeting of 28 August 2026)*

Every plan given to a patient at every visit, from her first visit to the latest, kept without overwriting.

- Patient selector, **Download all plans as PDF**, and **Issue a new plan**
- **Four tiles:** Plans on record · Revisions made · Calories then (first plan) · Calories now
- **Calories across every plan she has been given** — a line chart with the average marked
- **Every visit** — a timeline, newest first. Each visit shows its number and date, whether the plan was revised or continued unchanged, the calories, a note, the weight that day and the ₹600 charged. Each visit has buttons: **View full plan · PDF · Compare from here · Compare to here**
- **Compare two versions** — choose any older and newer version; the system lists every item **Added**, **Removed** or **Changed** by meal slot, and shows the change in date, calories and weight
- **Side-by-side view** of the two chosen plans, slot by slot

**View full plan** opens the complete diet chart for that date (see Section 10), with buttons: Close · Send on WhatsApp · **Start a new plan from this** · Download PDF.

**Start a new plan from this** loads that exact past plan into the plan builder so it can be adjusted and issued as a new plan.

In the sample data, Meera Trivedi has 26 plans on record from 11 Feb 2026 to 29 Aug 2026.

### 3.8 Food list

The dietician's own list of foods, described as *"in the measures you already use at the clinic"*.

- 34 sample items, searchable by name or category
- Columns: **nutrition pie chart**, food name, measure, category, calories, protein, carbohydrate, fat, fibre
- Non-vegetarian items are marked
- Clicking any row opens a detail view with a large pie chart and a table of grams, calories and percentage for each nutrient
- Buttons: **Download as Excel** and **+ Add food** (both demonstrated with a message; editing an item is also demonstrated)
- A note explains that the values belong to the dietician and nothing enters the list without her approval

### 3.9 Recipes

Six sample recipes shown as cards, each with: name, tag, serving size, calories, protein / carbohydrate / fat, **What goes in** (ingredients with quantities) and **How to make it** (method), plus an **Attach to a plan** button (demonstrated). **+ Add recipe** is demonstrated.

### 3.10 Exercises

Six sample exercises shown as cards, each with: a video thumbnail and play button, duration or sets, body area, the dietician's instruction note, the video source (*Unlisted · Clinic channel*), and an **Assign to a patient** button (demonstrated). The subtitle explains the videos are meant to sit unlisted on the clinic's own YouTube channel. **+ Add exercise** is demonstrated. No video actually plays.

### 3.11 Payments and dues *(added after the meeting of 28 August 2026)*

Subtitle: *₹600 per diet plan, settled after every 4 plans — consultation charges counted separately.*

- **Four tiles:** Collected this month · Outstanding dues (with the number of patients who have finished a cycle) · Cycle running (amounts not yet due) · Plans issued so far
- **Patient by patient** table: plans given, the current 4-plan cycle shown as four dots, amount paid, amount due now, last payment date, status (**Payment due**, **Cycle running** or **All cleared**), with **Record** and **WhatsApp** buttons for each patient
- **What you collected** — a bar chart of collections over the last six months
- **Recent receipts** — patient, date, number of plans covered, mode (Cash / UPI) and amount
- **How this counts** — a plain explanation of the ₹600-per-plan, 4-plan-cycle rule

**Record a payment** opens a form: amount received, paid by (Cash / UPI / Card), and what it is against (the plan range, consultation charge, or part payment). Saving is demonstrated.

**Download statement** is demonstrated.

### 3.12 WhatsApp message *(added after the meeting of 28 August 2026)*

Available from the patient file, the payments table and any diet chart. Opens a preview of a message the system writes automatically, containing: the patient's name, plans given so far, amount paid, amount due (or "nothing — your account is clear"), and the next visit date, signed by Dr. Nitee Gadhvi. When the application is in Gujarati, the message is written in Gujarati.

Pressing **Send on WhatsApp now** is demonstrated with a message; the prototype does not open WhatsApp or send anything.

### 3.13 Backup & safety

Subtitle: *Nothing in this system can be lost by accident.*

- **Three tiles:** Last backup (2:00 am, automatic every night) · Copies kept (30 nightly + 12 monthly) · In the recycle bin (restorable for 90 days)
- **Recycle bin** — deleted items with who deleted them, when, and time left; each has a **Restore** button that removes it from the bin in the demo
- **Backup history** — five sample backups with type (nightly, before a version update, monthly kept copy), size and status; each has **Restore this**, which asks the user to type the clinic name before confirming
- **Who changed what** — a change log of actions, the object affected, who did it and when
- A note stating that only the dietician's own login can erase permanently

Buttons: **Download everything** and **Back up now** (both demonstrated).

**All data on this screen is sample data.** No backup is actually taken.

### 3.14 All screens

An index of every screen in the prototype, grouped into dietician screens and patient screens, each openable directly for testing. Screens added after the meeting of 28 August 2026 are identified.

### 3.15 What is not present on the dietician side

For accuracy, the prototype does **not** contain: a settings or account screen, a password-change screen, a staff/reception login, an appointment calendar, a dedicated reports screen, or billing/GST invoices.

---

## 4. Patient Portal

On a laptop the patient view is shown inside a drawn phone frame with the caption *"What your patient sees"*. On a real phone it fills the whole screen. A bottom tab bar gives five tabs: **Today · Progress · My plans · Payments · Exercise**.

### 4.1 Sign in

Clinic name and *Dr. Nitee Gadhvi's clinic, Junagadh*; fields for **Your mobile number** and **6-digit PIN from the clinic**, filled with demo values; button **Open my plan**. A note explains there is nothing to download and the page can be added to the phone's home screen.

### 4.2 Today

- Greeting with the date and the patient's initials
- **The day ring** — a circle divided into seven segments, one per meal slot, filling in as meals are ticked, with "meals taken" and calories eaten out of the day's total in the centre
- **Your plan for today** — a card for each meal slot showing the slot name and time, the foods, and the calories. A tick circle on each card marks the meal as taken. Tapping a card opens the meal detail screen (in the prototype this always shows the Lunch example)
- **A note from your doctor**

### 4.3 Meal detail

The prototype contains one worked example, for **Lunch**; every meal card opens this example.

- A nutrition donut for the meal with protein, carbohydrate and fat, and fibre shown below
- **What to eat** — each item with its own small **nutrition pie chart**, quantity, measure, calories, and protein / carbohydrate / fat / fibre values
- **How to make it** — the linked recipe with ingredients and method
- Button: **Mark lunch as taken**

### 4.4 Progress

- **You have lost** — kilograms lost, start and current weight, a goal bar with percentage and kilograms to go
- Two tiles: **Per week** average loss and **BMI now**
- **Your weight, week by week** — line chart with the target
- **How well you followed the plan** — weekly adherence bar chart with a short explanatory note

### 4.5 My plans *(expanded after the meeting of 28 August 2026)*

Every plan the patient has been given since her first visit, newest first, with date, note, weight that day and calories. The current plan is marked **Running now**. Each has **View this plan**.

### 4.6 A past plan

Opens one past plan exactly as it was on that date: a nutrition donut, the note, the weight that day, and every meal slot with its foods. Button **See it as a printed chart** opens the full diet chart, which she can print or save as PDF.

### 4.7 Payments *(added after the meeting of 28 August 2026)*

- Amount to be paid (or *Nothing pending*)
- Diet plans given, charge per plan, paid till date, and progress in the current cycle
- **Your next visit** date
- **Receipts** — date, plans covered, payment mode and amount
- A note that consultation charges are billed separately at the clinic counter

### 4.8 Exercise

Cards for each exercise assigned to her: video area with play button, name, body area, duration, and the dietician's instruction. A note explains the videos are on the clinic's own channel and cannot be found by searching YouTube. Playing a video is demonstrated with a message.

### 4.9 What is not present on the patient side

The prototype does **not** contain: a patient profile/edit screen, appointment booking, in-app messaging, online payment, or notifications.

---

## 5. Diet Management

### 5.1 Meal slots

Seven fixed slots, each with a default time:

| Slot | Time |
|---|---|
| Early morning | 6:30 am |
| Breakfast | 8:30 am |
| Mid-morning | 11:00 am |
| Lunch | 1:30 pm |
| Evening | 4:30 pm |
| Dinner | 8:00 pm |
| Bedtime | 10:00 pm |

A plan is stored as a set of slots, each holding a list of food items with a quantity (for example, *Jowar rotli × 2*).

### 5.2 Food items

Each food item in the prototype carries these fields:

| Field | Meaning |
|---|---|
| Name | e.g. *Boiled moong* |
| Measure | the household measure the values refer to |
| Calories | kcal per measure |
| Protein | grams per measure |
| Carbohydrate | grams per measure |
| Fat | grams per measure |
| Fibre | grams per measure |
| Group | food category |
| Vegetarian flag | marks non-vegetarian items |

Values are rounded sample figures in the style of Indian food composition tables, intended to be replaced by the dietician's own approved values.

### 5.3 Household measurements

The prototype uses clinic measures rather than grams: **1 katori, 1 medium, 1 piece, 2 pieces, 4 pieces, 5 pieces, 1 plate, 1 glass, 1 cup, 1 mutthi, 100 g.**

### 5.4 Food categories

**Cereals, Pulses, Veg, Dairy, Protein, Drinks, Nuts, Snacks, Fruit.**

Sample items include boiled moong, moong dal khichdi, bajra rotla, jowar rotli, methi thepla, khakhra, poha, upma, dhokla, toor dal, chana chaat, sprouted matki, lauki / tindora / palak sabzi, curd, chaas, toned milk, paneer bhurji, almonds, walnuts, roasted chana, papaya, guava, apple, orange, oats porridge, and two non-vegetarian items (boiled egg white, grilled chicken).

### 5.5 Nutrition calculation

- Totals are **quantity × per-measure value**, added across items, slots and the full day
- The plan builder recalculates the day's calories, protein, carbohydrate, fat and fibre instantly as items are added or removed
- Nutrition is shown as:
  - a **donut** (protein, carbohydrate, fat by energy) with calories in the centre — for a meal, a day's plan, and each past plan
  - a **pie chart per food item** with four slices — protein, carbohydrate (excluding fibre), fat and fibre — sized by the calories each contributes, with the item's calories in the centre, and grams / calories / percentage listed beside it

### 5.6 Recipes

Each recipe has: name, serving size, calories, protein, carbohydrate, fat, a tag, **What goes in** (ingredients with quantities) and **How to make it** (method).

Sample recipes: Moong chilla (High protein) · Lauki muthiya (Steamed) · Methi thepla, low oil (Everyday) · Sprouts and pomegranate bowl (No cooking) · Oats and curd bowl (Night before) · Vegetable clear soup (Evening).

### 5.7 Exercise plans

Each exercise has: name, body area, duration or sets/repetitions, the source of its video, and the dietician's instruction. Each patient has a set of assigned exercises shown in the plan builder and on the patient's Exercise tab.

Sample exercises: Morning walk — brisk pace (30 minutes) · Surya namaskar — 6 rounds (12 minutes) · Wall push-ups (2 sets of 12) · Chair squats (2 sets of 10) · Seated leg raises (2 sets of 15) · Deep breathing — pranayama (8 minutes).

---

## 6. Patient Management

| Item | How the prototype handles it |
|---|---|
| **Patient profile** | Name, age, phone, enrolment date, food preference, height, starting weight, target weight, the dietician's note, weight readings, weekly adherence scores, active/maintenance status |
| **Age** | Stored and shown with the name |
| **Gender** | A gender value exists in the sample data (all sample patients are female), but **there is no gender field on the registration form and gender is not displayed** anywhere |
| **Height** | Entered at registration in cm; used to calculate BMI |
| **Starting weight** | Entered at registration; shown on the file and in progress |
| **Target weight** | Entered at registration; drawn as the target line on weight charts |
| **Weight history** | One reading per visit; shown as a line chart on the patient file, the patient's Progress tab, and against each plan in Plan history |
| **Dietary preference** | Vegetarian, Non-vegetarian, Jain or Eggetarian at registration |
| **Health / medical notes** | "Medical notes and allergies" free-text field at registration; separate private note from the dietician shown on the file |
| **Adherence** | A weekly percentage for the last 7 weeks, shown as coloured bars; patients also tick off meals on their Today screen |
| **Active / maintenance status** | Shown as **On plan** or **Maintenance** in the patient list; maintenance patients are excluded from the active-plan dashboard |
| **Progress tracking** | Kilograms lost, average loss per week, BMI, percentage of goal reached, kilograms remaining |
| **Report uploads** | Mentioned on the registration screen and as an event in "Her journey"; **there is no working upload feature** |

---

## 7. Diet Plan Workflow

The workflow below uses only steps the prototype actually supports.

1. **Select patient** — from the dashboard, the Patients list (with search), or the selector in the plan builder or Plan history
2. **Review patient information** — the patient file: weight trend, BMI, progress to goal, adherence, journey, current plan and nutrition, private note, account position
3. **Review past plans** *(optional)* — Plan history: every past plan, the calorie trend, and a comparison of any two plans
4. **Create or edit the diet plan** — either **Edit her plan** (starts from the current plan), load a **template**, or **Start a new plan from this** on any past plan
5. **Work through the meal slots** — seven fixed slots with default times
6. **Add food** — from the approved food list only, grouped by category
7. **Set quantities** — adding the same food again increases its quantity; the household measure comes from the food list; items can be removed
8. **Review nutrition** — the live daily donut, the difference from the calorie target, and nutrient totals
9. **Issue the plan** — **Issue this plan** saves it for the patient in the current session
10. **Generate the diet chart** — **Download diet chart** on the patient file, or **View full plan / PDF** on any version in Plan history, prints an A4 chart
11. **Share with the patient** — the patient sees the issued plan in her portal; a WhatsApp message with payment status and next visit can be prepared *(sending is demonstrated only)*

**Not supported in the prototype:** changing the time of a meal slot, adding custom slots, changing the measure of an item within a plan, entering a free-text food, or a plan validity/expiry date.

---

## 8. Patient Experience

1. **Signs in** on her phone with her mobile number and 6-digit PIN.
2. **Sees today's plan** — each meal slot with its time and foods, and the calories for each.
3. **Follows the day** — ticks each meal as taken; the seven-segment day ring fills and shows calories eaten against the day's total.
4. **Understands the nutrition** — opens any meal to see a pie chart for every item and a donut for the whole meal, with protein, carbohydrate, fat and fibre.
5. **Learns to cook it** — the linked recipe shows ingredients and method.
6. **Does her exercise** — the Exercise tab shows the exercises assigned to her with instructions.
7. **Watches her progress** — weight lost, goal bar, weekly loss, BMI, weight chart and her weekly adherence.
8. **Looks back** — My plans lists every plan she has been given; she can open any of them and print or save it.
9. **Knows where she stands** — Payments shows what she has paid, what is due, receipts, and her next visit date.
10. **Uses her own language** — the whole screen can be switched to Gujarati.

---

## 9. Language Support

### Languages

- **English** — the default
- **Gujarati (ગુજરાતી)**

### Where the switch is

In the prototype the language switch is in the top demo bar: **English | ગુજરાતી**. One switch changes the language of both the dietician's screens and the patient's screens. A confirmation message appears when switching.

### How it is implemented in the prototype

- The screens are written in English. When Gujarati is selected, a translation layer rewrites the text on screen after every screen is drawn — including pop-up windows, diet charts and the patient portal.
- It uses a dictionary of whole phrases first (menus, headings, buttons, labels, meal slot names, food names, recipe and exercise names, patient names), then translates remaining words such as units, months, measures and nutrients.
- The **Noto Sans Gujarati** font is loaded, and the layout is adjusted for Gujarati script.
- Search boxes and dropdown options are also translated.
- The WhatsApp message is generated directly in Gujarati when the application is in Gujarati.
- Numbers remain in standard digits.

### Limitations in the prototype

- A small amount of text may remain in English (the demo bar itself is intentionally left in English).
- The wording is a first draft and has not been reviewed by the dietician.
- A production build would use proper language files with clinic-approved wording (see Sections 13 and 14).

---

## 10. Printable Diet Chart

A dedicated, printable diet chart is available for **the current plan and every past plan**.

### Where it is opened

- **Patient file** → **Download diet chart** (current plan)
- **Plan history** → **View full plan** or **PDF** on any visit
- **Plan history** → **Download all plans as PDF** (every plan for that patient in one document)
- **Patient portal** → My plans → a past plan → **See it as a printed chart**

### Contents

| Part | Contents |
|---|---|
| **Letterhead** | Clinic mark, *Slim 'n Slender*, *Dr. Nitee Gadhvi · Consulting dietician · Junagadh*; on the right, "Diet chart", the plan date, and its sequence (e.g. *Plan 6 / 26*) |
| **Patient information** | Patient name, age, food preference, weight that day, target weight, and the amount charged for that plan |
| **Diet schedule** | A table with one row per meal slot: **Meal · Time · What to eat · kcal** |
| **Meal timing** | The default time of each slot |
| **Food quantities** | Each food with its quantity and household measure (e.g. *Jowar rotli — 3 × 1 medium*) |
| **Nutrition values** | Calories per slot, **Total for the day**, and pills for total protein, carbohydrate, fat and fibre, plus the plan status (e.g. *Continued, no change*) |
| **Notes** | *Note from your dietician* |
| **Footer** | Issue date, *kept permanently in the patient's plan history*, and *Slim 'n Slender, Junagadh* |

### Printable format

- Formatted for **A4** with 14 mm margins
- When printed, everything except the chart is hidden
- **Download PDF** uses the browser's print function, so the user chooses **Save as PDF** (or a printer) in the print window that appears
- **Download all plans as PDF** prints one plan per page — in the sample data, 26 pages for Meera Trivedi
- The on-screen chart window also offers **Send on WhatsApp** and (dietician only) **Start a new plan from this**

**Note:** this printing works in the prototype. It relies on the browser's print window rather than a one-tap file download.

---

## 11. Business Benefits

| Area | Benefit to the clinic |
|---|---|
| **Digital patient records** | One file per patient holding details, notes, weight history, every plan and the account position, replacing the paper file |
| **Faster diet planning** | Plans built from a fixed food list with live totals, starting from the current plan, a template, or any past plan |
| **Standardised meal planning** | Seven fixed slots, clinic measures and approved nutrition values mean every plan is built the same way |
| **Complete plan history** | Every plan ever given is kept, comparable and printable, so nothing is lost or overwritten |
| **Patient monitoring** | The dashboard surfaces follow-ups due and missing weights without searching through files |
| **Weight tracking** | Weekly weights charted against the target, with BMI and average weekly loss calculated |
| **Adherence tracking** | Patients tick off meals; weekly adherence is shown to both dietician and patient |
| **Reusable food and recipe library** | Foods and recipes are entered once and reused across all patients |
| **Exercise planning** | A shared exercise list assigned per patient, with instructions and videos |
| **Printable diet charts** | A consistent, branded A4 chart for any plan, current or past |
| **Payment tracking** | ₹600-per-plan charges and 4-plan settlement cycles tracked automatically, separate from consultations |
| **Reduced paperwork** | No hand-written plans, no paper files to store or search |
| **Better patient experience** | Patients see their plan, nutrition, progress, history and payments on their own phone, in Gujarati if they prefer |

---

## 12. Prototype vs Production

> **This is a prototype created to demonstrate the proposed Slim 'n Slender application structure, user experience, workflow and functionality. It is not the final production application.**

### Technical nature of the prototype

The prototype is **a single HTML file** that runs entirely inside a web browser. There is no server, no database and no internet connection required, apart from loading the display fonts. All patients, plans, payments, backups and log entries are **sample data written into the file**.

### What genuinely works in the prototype

- Navigating every screen, on laptop, tablet and phone layouts
- Searching the patient list and the food list
- The plan builder: adding and removing foods, and live calculation of calories and nutrients
- Issuing a plan (kept only until the page is reloaded)
- Loading any past plan into the builder with **Start a new plan from this**
- Plan history: the visit timeline, calorie chart, and comparison of any two plans
- All charts: weight, adherence, calorie history, collections, nutrition donuts and per-food pie charts
- Payment and dues **calculations** (₹600 per plan, 4-plan cycles, due and running amounts)
- Generating the WhatsApp message **text**
- Ticking off meals on the patient's Today screen
- Printing any diet chart, or all of a patient's plans, through the browser (Save as PDF)
- Switching the whole application between English and Gujarati
- Removing an item from the sample recycle bin

### What is demonstrated only (shows a message, performs no real action)

| Action | What happens in the prototype |
|---|---|
| Sign in (doctor and patient) | Credentials are pre-filled and not checked |
| Register a patient | A confirmation message; no record is created |
| Save as template / load a template | A confirmation message |
| Add, edit food items | A message |
| Add recipe, attach recipe to a plan | A message |
| Add exercise, assign exercise, play video | A message |
| Record a payment / save a receipt | A message; balances do not change |
| Send on WhatsApp | A message; WhatsApp is not opened and nothing is sent |
| Download as Excel, Download statement, Download everything | A message |
| Back up now, Restore from backup | A message |
| Report uploads | Mentioned only; no upload exists |

### What the prototype does NOT contain

- No database — nothing is saved; **Reset demo** or reloading the page restores the original sample data
- No real authentication, passwords, PINs or user accounts
- No cloud storage, file uploads or real backups
- No notifications, SMS, e-mail or WhatsApp sending
- No payment gateway or online payment
- No external APIs or third-party integrations
- No appointment booking or calendar
- No settings, account or staff-management screens

---

## 13. Future Production Requirements

> **FUTURE / PRODUCTION — none of the items in this section exist in the prototype.** They describe what the real application would need. Final scope, pricing and timelines are governed by the separate quotation.

### 13.1 Accounts and security

- **FUTURE** — Secure authentication for the dietician (and staff, if required)
- **FUTURE** — Patient sign-in with mobile number and a clinic-issued PIN, stored securely
- **FUTURE** — Dietician / doctor accounts with the clinic owner as administrator
- **FUTURE** — Role-based access (e.g. dietician, reception, patient), with permanent deletion restricted to the dietician
- **FUTURE** — Protection of patient medical information: encryption, access limits, session timeouts
- **FUTURE** — Privacy and consent handling in line with India's Digital Personal Data Protection Act, 2023
- **FUTURE** — Audit logs that cannot be edited, recording who changed what and when

### 13.2 Data

- **FUTURE** — A real, secure cloud database for patients, plans, foods, recipes, exercises and payments
- **FUTURE** — Permanent patient history: every plan version, weight reading and payment kept without overwriting
- **FUTURE** — Automatic nightly backups, backup before every software update, and tested restore
- **FUTURE** — Recycle bin with time-limited recovery
- **FUTURE** — Data export (Excel / CSV) of patients, food list and payments
- **FUTURE** — Migration of existing paper records, if required
- **FUTURE** — Report and document uploads (e.g. blood reports) with cloud storage

### 13.3 Clinical features

- **FUTURE** — Working patient registration, editing and archiving
- **FUTURE** — Editable food list, recipe library and exercise library, with dietician-approved values
- **FUTURE** — Saved, reusable diet plan templates
- **FUTURE** — Recording weight at each visit
- **FUTURE** — Progress reports

### 13.4 Documents and sharing

- **FUTURE** — One-tap PDF generation and download of diet charts (without the browser print window)
- **FUTURE** — Diet plan sharing to the patient's portal as soon as it is issued
- **FUTURE** — Sending the diet chart and payment/follow-up message by WhatsApp

### 13.5 Communication

- **FUTURE** — WhatsApp messages (either one-tap send from the dietician's phone, or fully automatic sending via a WhatsApp Business account)
- **FUTURE** — SMS and/or e-mail notifications, if required
- **FUTURE** — Patient reminders (next visit, weighing, meals)

### 13.6 Clinic operations

- **FUTURE** — Appointment booking and a clinic calendar, if required
- **FUTURE** — Payment recording with receipts; online payment, if required
- **FUTURE** — Billing or GST invoices, if required

### 13.7 Language

- **FUTURE** — Full English and Gujarati language files with wording approved by the dietician
- **FUTURE** — Gujarati diet charts and messages

### 13.8 Deployment

- **FUTURE** — Hosting and a clinic web address (domain)
- **FUTURE** — Deployment as a Progressive Web App (PWA) that patients add to their phone's home screen, with no app-store download
- **FUTURE** — Optimisation for low-end phones and weak mobile connections

---

## 14. Client Confirmation Checklist

Items to confirm with Dr. Nitee Gadhvi before or during production build.

### Workflow

- [ ] Exact dietician workflow at each visit (weigh → review → plan → print/share → payment)
- [ ] Does **every visit** create a new plan charged at ₹600, or can a visit review the patient **without** issuing (and charging for) a plan?
- [ ] Who uses the system: the dietician only, or also reception staff?

### Patient registration

- [ ] Registration fields: confirm name, mobile, age, food preference, height, starting weight, target weight
- [ ] Is **gender** required on the form? (not present in the prototype)
- [ ] Address, date of birth, emergency contact, referral source — required or not?
- [ ] Wording of the patient consent

### Medical information

- [ ] Which conditions to record (e.g. thyroid, PCOS, diabetes, blood pressure)
- [ ] Allergies and foods to avoid
- [ ] Blood reports: upload required? Which reports?
- [ ] Body measurements beyond weight (waist, hip, body fat)?

### Diet planning rules

- [ ] Are the seven meal slots and default times correct? Should times be editable per patient?
- [ ] Is a plan valid for a fixed period (e.g. 7 or 14 days)?
- [ ] How is the daily calorie target set for each patient?
- [ ] Starting templates to be loaded (the prototype shows four examples)

### Food database

- [ ] The clinic's full food list with measures and values, and who approves it
- [ ] Source of nutrition values
- [ ] Food categories to use

### Nutrition calculation

- [ ] Nutrients to show: calories, protein, carbohydrate, fat, fibre — any others (sugar, sodium)?
- [ ] Rounding rules

### Exercise

- [ ] The clinic's exercise list and instructions
- [ ] Video hosting (unlisted YouTube channel?) and who records the videos

### Follow-up and appointments

- [ ] Follow-up frequency (the prototype assumes about weekly)
- [ ] Is appointment booking needed?

### Payments

- [ ] ₹600 per plan and settlement after every 4 plans — confirm
- [ ] Consultation charge amount and how it is recorded
- [ ] Payment modes (Cash / UPI / Card); receipts needed?
- [ ] GST invoices required?

### Reports

- [ ] Reports required (e.g. monthly collections, patient progress, outstanding dues)

### Notifications and messaging

- [ ] WhatsApp: one-tap send from the dietician's phone, or automatic sending?
- [ ] Message content: payment status, next visit, diet chart — anything else?
- [ ] SMS or e-mail needed?

### Language

- [ ] Gujarati required for the patient side, the dietician side, or both?
- [ ] Dietician to review and approve Gujarati wording
- [ ] Diet charts in Gujarati?

### Data privacy

- [ ] Who may see which patient data
- [ ] Data retention period
- [ ] Consent and privacy notice wording

### Hosting and database

- [ ] Clinic web address (domain name)
- [ ] Accounts to be registered in the clinic's name

### Backup

- [ ] Backup frequency and how long copies are kept
- [ ] Who may restore data

### Existing data migration

- [ ] Number of existing paper patient files
- [ ] Should old records be entered into the system? By whom?

### Third-party integrations

- [ ] WhatsApp Business account (only if automatic sending is chosen)
- [ ] Payment gateway (only if online payment is needed)
- [ ] Any other software the clinic already uses

---

## Appendix A — Sample data in the prototype

All data is invented for demonstration.

**Patients (8):**

| Patient | Age | Preference | Status | Visits recorded |
|---|---|---|---|---|
| Meera Trivedi | 38 | Veg | On plan | 26 |
| Kinjal Dave | 29 | Veg | On plan | 22 |
| Hetal Joshi | 44 | Veg | On plan | 29 |
| Rekha Bhatt | 52 | Veg | On plan | 18 |
| Priya Modi | 26 | Veg | On plan | 14 |
| Falguni Shah | 35 | Veg | On plan | 12 |
| Bhavna Pandya | 47 | Veg | On plan | 10 |
| Nisha Vora | 31 | Non-veg | Maintenance | 33 |

**Libraries:** 34 food items · 6 recipes · 6 exercises · 7 meal slots · 4 plan templates

**Payment rules in the sample data:** ₹600 per diet plan · dues settle after every 4 plans (₹2,400 per cycle) · consultation ₹500, recorded separately

**Safety sample data:** 3 recycle-bin items · 5 backup entries · 5 change-log entries

## Appendix B — Changes added after the meeting of 28 August 2026

| # | Requirement from the meeting | Where it appears in the prototype |
|---|---|---|
| 1 | Every visit's diet plan kept in full history, visible to doctor and patient, each available as a PDF | Plan history (dietician) · My plans and past plan view (patient) · Printable diet chart |
| 2 | Payment panel: ₹600 per plan, separate from consultation, dues after every 4 plans, with charts | Payments and dues · Her account on the patient file · Payments tab (patient) · Payments due tile on the dashboard |
| 3 | Pie chart for every food item (calories, protein, carbohydrate, fat, fibre) | Food list (each row and detail view) · Meal detail (patient) |
| 4 | Gujarati for the whole application | English / ગુજરાતી switch in the top bar |
| 5 | Payment status and next follow-up date on WhatsApp | Send on WhatsApp — message preview (sending demonstrated only) |

---

*Document prepared by Sangam InfoAnalytics, Junagadh, Gujarat, India. Based on the prototype file as supplied; no part of the prototype was changed.*
