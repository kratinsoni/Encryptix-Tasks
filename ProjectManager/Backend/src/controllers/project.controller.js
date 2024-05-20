import { Project } from "../models/project.model.js";
import { asyncHandler } from "../utils/asynchandler.js";

const createProject = asyncHandler(async (req, res) => {

    const { name, description, teamMembers, tasks, status } = req.body;
    const projectManager = req.user._id;

    if (!name) {
        res.status(400);
        throw new Error("Please provide a project name");
    }

    if (!description) {
        res.status(400);
        throw new Error("Please provide a project description");
    }

    const newProject = await Project.create({
        name,
        description,
        projectManager,
        teamMembers,
        tasks,
        status,
    });

    if (!newProject) {
        res.status(500);
        throw new Error("Couldn't create project");
    }

    res.status(201).json({
        _id: newProject._id,
        name: newProject.name,
        description: newProject.description,
        projectManager: newProject.projectManager,
        teamMembers: newProject.teamMembers,
        tasks: newProject.tasks,
        status: newProject.status,
    });
})

const deleteProject = asyncHandler(async (req, res) => {
    const projectId = req.params.id;

    if (!projectId) {
        res.status(400);
        throw new Error("Please provide a project id");
    }

    const project = await Project.findByIdAndDelete(projectId);

    if (!project) {
        res.status(404);
        throw new Error("Project not found");
    }

    res.status(200).json({
        message: "Project deleted successfully",
    });
})

const getProject = asyncHandler(async (req, res) => {

    const projectId = req.params.id;

    if (!projectId) {
        res.status(400);
        throw new Error("Please provide a project id");
    }

    const project = await Project.findById(projectId);

    if (!project) {
        res.status(404);
        throw new Error("Project not found");
    }

    res.status(200).json({
        _id: project._id,
        name: project.name,
        description: project.description,
        projectManager: project.projectManager,
        teamMembers: project.teamMembers,
        tasks: project.tasks,
        status: project.status,
    });
})

const changeProjectStatus = asyncHandler(async (req, res) => {
    const projectId = req.params.id;
    const { status } = req.body;

    if (!projectId) {
        res.status(400);
        throw new Error("Please provide a project id");
    }

    if (!status) {
        res.status(400);
        throw new Error("Please provide a status");
    }

    const project = await Project.findByIdAndUpdate(projectId, { status }, { new: true });

    if (!project) {
        res.status(404);
        throw new Error("Project not found");
    }

    res.status(200).json({
        _id: project._id,
        name: project.name,
        description: project.description,
        projectManager: project.projectManager,
        teamMembers: project.teamMembers,
        tasks: project.tasks,
        status: project.status,
    });
})

const getProjectsByUser = asyncHandler(async (req, res) => {
    const projectManager = req.user._id;

    const projects = await Project.find({ projectManager });

    if (!projects) {
        res.status(404);
        throw new Error("No Projects found");
    }

    res.status(200).json(projects);
})

export { createProject, deleteProject, getProject, changeProjectStatus, getProjectsByUser };

