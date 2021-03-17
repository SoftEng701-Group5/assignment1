import React from "react";
import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import Task from '../../components/global/Task/Task';
import SubTask from '../../components/global/Task/Subtask';
import userEvent from "@testing-library/user-event"
import{createMemoryHistory} from 'history'
import {Router} from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup)


