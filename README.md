# Vonage and Appwrite Cloud Demo

This repository contains code for a Appwrite Cloud and Vonage Video demo application

## Basic Configuration

### Requirements

* A [Vonage Video API Account](https://www.tokbox.com/account/user/signup).
* An [Appwrite Cloud Account](https://cloud.appwrite.io/register).
* [The Appwrite CLI tool](https://appwrite.io/docs/command-line)
* A [ngrok account](https://ngrok.com/). We will use this to access our video app on many devices.

### Set up

1. Sign up for a free [Vonage Video API Account](https://www.tokbox.com/account/user/signup).
1. Create a new Video Project:
    1. Go to "Projects", "Create New Project"
    1. Click "Create Custom Project"
    1. Name the application "Vonage Appwrite Demo"
    1. Click "Create"
    1. Copy down the API Key and Secret
1. Sign up for a free [Appwrite Cloud Account](https://cloud.appwrite.io/register)
1. Create a new Project:
    1. Name the project "Vonage Video Demo", and click "Create"
    1. Click on "Web App" to add a platform
    1. Name the app "Vonage Video"
    1. Enter '*' as the Hostname
    1. Click "Next", and then "Skip Optional Steps"
    1. Click on "Project ID" at the top to copy down the project ID
1. Create an Appwrite Cloud API Key:
    1. Click on "Settings", and then "View API Keys"
    1. Click on "Create API Key"
    1. Enter "Functions" for the name, and click "Next"
    1. Toggle "Auth", "Database", "Functions", and "Storage"
    1. Click "Create"
    1. Click on "API Key Secret" at the top to copy down the Appwrite API Key
1. Copy `appwrite.json.dist` to `appwrite.json`
1. Edit `appwrite.json` for your demo:
    1. Enter the project ID from before into the `projectId` key
    1. Enter your Vonage API Key into `functions.variables.VONAGE_VIDEO_API_KEY`
    1. Enter your Vonage API Secret into `functions.variables.VONAGE_VIDEO_API_SECRET`
    1. Enter your Appwrite API Key into `functions.variables.APPWRITE_FUNCTION_API_KEY`
1. Copy `.env.dist` to `.env`
    1. Enter your Appwrite Project ID into `VITE_APPWRITE_PROJECT_ID`

## Running the Demo
1. Run the demo with `npm run dev`
1. Access the page at `http://localhost:5173`