# SmartSpace AI - Intelligent Data Management Assistant

SmartSpace AI is a powerful, AI-driven digital assistant designed to revolutionize data management. Using Intel's cutting-edge technologies, it provides intuitive, real-time data organization and optimization. It helps professionals and users manage scattered data across devices, optimize storage, and improve productivity while ensuring enhanced security.

---

## Table of Contents

1. [Problem Statement](#problem-statement)  
2. [Motivation and Statistics](#motivation-and-statistics)  
3. [Proposed Solution](#proposed-solution)  
4. [Architecture Overview](#architecture-overview)  
5. [Tech Stack](#tech-stack)  
6. [Novelty and Expected Results](#novelty-and-expected-results)  
7. [Setup and Installation](#setup-and-installation)  
8. [Usage](#usage)  
9. [Project Screenshots](#project-screenshots)  
10. [Team Members](#team-members)

---

## Problem Statement

In today's digital era, managing vast amounts of disorganized data scattered across devices is a significant challenge. This results in:

- Wasted time searching for misplaced files.  
- Reduced productivity and global economic losses.  
- Inefficient storage due to duplicates and unused files.  
- Increased risks to data security.
  
---

## Motivation and Statistics

### Motivation  
- The increasing reliance on digital data requires smarter tools for management and optimization.  
- SmartSpace AI offers a solution to save time, increase productivity, and enhance data security.  

### Statistics  
- Professionals waste over **3 hours weekly** searching for misplaced files (Forbes, 2023).  
- Disorganized data contributes to **$1.5 trillion in annual productivity loss** globally (McKinsey, 2023).  
- The average user manages around **2TB of data** across multiple devices.

---

## Proposed Solution

SmartSpace AI acts as an intelligent assistant to streamline data management. Key features include:  

- **Smart Search:** Retrieve files using context-based AI models.  
- **Real-Time Optimization:** Categorizes and organizes files with intelligent suggestions.  
- **Automatic Cleanup:** Detects duplicates and unused files, optimizing storage.  
- **Cross-Platform Sync:** Integrates seamlessly across devices and cloud platforms.  
- **AI Chatbot:** Handles real-time user queries with personalized recommendations.  

---

## Architecture Overview

### Diagram  
![Architecture Diagram](https://github.com/CroWzblooD/Radiologist-AI/blob/main/components/imagesSmartSpace/image.png)  

### Key Components  
- **Frontend:** Built with Next.js, Tailwind CSS, and TypeScript.  
- **Backend:** Node.js, Express.js, and PostgreSQL with Prisma.  
- **Optimization:** Powered by Intel AI accelerators and OpenVINO Toolkit.  

---

## Tech Stack

### Hardware  
- Intel AI PC with NPU  
- Intel® Arc™ GPU  

### Frontend Technologies  
- Next.js  
- Tailwind CSS  
- TypeScript  

### Backend Technologies  
- Node.js  
- Express.js  
- PostgreSQL with Prisma  

### Optimization Tools  
- OpenVINO™ Toolkit  
- Intel® Neural Compressor  
- TensorFlow Lite  

### Security Frameworks  
- OAuth 2.0  

### Development Tools  
- Docker  

---

## Novelty and Expected Results

### Novelty  
- Combines privacy-first AI workflows with real-time edge processing.  
- Centralized, scalable data management tailored for diverse user categories.  

### Expected Results  
- **40% storage optimization** via automatic cleanup.  
- **70% time savings** in retrieving files.  
- Enhanced productivity and reduced frustration for users.  

---

## Setup and Installation

### Prerequisites

1. Install **Node.js** and **npm**:  
   Download and install the latest version from [Node.js official website](https://nodejs.org/).

2. Install **Docker**:  
   Download and install Docker from [Docker official website](https://www.docker.com/).

3. Install **PostgreSQL**:  
   Set up PostgreSQL by downloading it from [PostgreSQL official website](https://www.postgresql.org/).  

4. Install **Intel Optimization Tools**:
   - OpenVINO Toolkit: Follow the installation guide at [OpenVINO documentation](https://docs.openvino.ai/).  
   - Intel® Neural Compressor and AI Analytics Toolkit: Follow setup instructions from [Intel AI tools](https://www.intel.com/ai).  

### Installation Steps

1. Clone the repository:  
   ```bash
   git clone https://github.com/your-repo/SmartSpace-AI.git
   cd SmartSpace-AI

2. Install dependencies for the frontend:  
   ```bash
   cd frontend
   npm install

3. Install dependencies for the backend:
   ```bash
   cd ../backend
   npm install

4. Set up PostgreSQL:
   - Create a new database.
   - Update the `.env` file with your database connection details:
   ```env
   DATABASE_URL=postgresql://username:password@localhost:5432/your-database-name

5. Run database migrations with Prisma:
   ```bash
   npx prisma migrate dev

6. Build the frontend:
   ```bash
   cd ../frontend
   npm run build

7. Start the application:
   - Start the backend:
     ```bash
     cd ../backend
     npm start

   - Start the fronted:
     ```bash
     cd ../frontend
     npm start

---

## Usage

1. Upload files or grant SmartSpace AI permission to scan data across devices.  
2. The AI assistant analyzes and organizes data intelligently.  
3. Access categorized and optimized data via the user interface.  

---

## Project Screenshots

### SmartSpace User Interface  
![SmartSpace User Interface](https://github.com/CroWzblooD/Radiologist-AI/blob/main/components/imagesSmartSpace/smartspace-img1.jpg)
![SmartSpace User Interface](https://github.com/CroWzblooD/Radiologist-AI/blob/main/components/imagesSmartSpace/smartspace-img2.jpg)
![SmartSpace User Interface](https://github.com/CroWzblooD/Radiologist-AI/blob/main/components/imagesSmartSpace/smartspace-img3.jpg)
![SmartSpace User Interface](https://github.com/CroWzblooD/Radiologist-AI/blob/main/components/imagesSmartSpace/smartspace-img4.jpg)
![SmartSpace User Interface](https://github.com/CroWzblooD/Radiologist-AI/blob/main/components/imagesSmartSpace/smartspace-img5.jpg)
![SmartSpace User Interface](https://github.com/CroWzblooD/Radiologist-AI/blob/main/components/imagesSmartSpace/smartspace-img6.jpg)
![SmartSpace User Interface](https://github.com/CroWzblooD/Radiologist-AI/blob/main/components/imagesSmartSpace/smartspace-img7.jpg)
![SmartSpace User Interface](https://github.com/CroWzblooD/Radiologist-AI/blob/main/components/imagesSmartSpace/smartspace-img8.jpg)
![SmartSpace User Interface](https://github.com/CroWzblooD/Radiologist-AI/blob/main/components/imagesSmartSpace/smartspace-img9.jpg)

### SmartSpace AI User Interface  
![SmartSpace AI User Interface](https://github.com/CroWzblooD/Radiologist-AI/blob/main/components/imagesSmartSpace/smartspace-img10.jpg)  

---

## Team Members

**Team Name:** Squirtle

- **Ashish K Choudhary**  
- **Krishna**  


