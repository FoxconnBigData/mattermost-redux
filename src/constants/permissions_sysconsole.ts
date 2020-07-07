// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import Permissions from './permissions';

export const ResourceToSysConsolePermissionsTable: Record<string, Array<string>> = {
    about: [Permissions.PERMISSION_READ_SYSCONSOLE_ABOUT, Permissions.PERMISSION_WRITE_SYSCONSOLE_ABOUT],
    reporting: [Permissions.PERMISSION_READ_SYSCONSOLE_REPORTING, Permissions.PERMISSION_WRITE_SYSCONSOLE_REPORTING],
    user_management: [Permissions.PERMISSION_READ_SYSCONSOLE_USERMANAGEMENT, Permissions.PERMISSION_WRITE_SYSCONSOLE_USERMANAGEMENT],
    'user_management.users': [Permissions.PERMISSION_READ_SYSCONSOLE_USERMANAGEMENT_USERS, Permissions.PERMISSION_WRITE_SYSCONSOLE_USERMANAGEMENT_USERS],
    'user_management.groups': [Permissions.PERMISSION_READ_SYSCONSOLE_USERMANAGEMENT_GROUPS, Permissions.PERMISSION_WRITE_SYSCONSOLE_USERMANAGEMENT_GROUPS],
    'user_management.teams': [Permissions.PERMISSION_READ_SYSCONSOLE_USERMANAGEMENT_TEAMS, Permissions.PERMISSION_WRITE_SYSCONSOLE_USERMANAGEMENT_TEAMS],
    'user_management.channels': [Permissions.PERMISSION_READ_SYSCONSOLE_USERMANAGEMENT_CHANNELS, Permissions.PERMISSION_WRITE_SYSCONSOLE_USERMANAGEMENT_CHANNELS],
    'user_management.permissions': [Permissions.PERMISSION_READ_SYSCONSOLE_USERMANAGEMENT_PERMISSIONS, Permissions.PERMISSION_WRITE_SYSCONSOLE_USERMANAGEMENT_PERMISSIONS],
    environment: [Permissions.PERMISSION_READ_SYSCONSOLE_ENVIRONMENT, Permissions.PERMISSION_WRITE_SYSCONSOLE_ENVIRONMENT],
    site: [Permissions.PERMISSION_READ_SYSCONSOLE_SITE, Permissions.PERMISSION_WRITE_SYSCONSOLE_SITE],
    authentication: [Permissions.PERMISSION_READ_SYSCONSOLE_AUTHENTICATION, Permissions.PERMISSION_WRITE_SYSCONSOLE_AUTHENTICATION],
    plugins: [Permissions.PERMISSION_READ_SYSCONSOLE_PLUGINS, Permissions.PERMISSION_WRITE_SYSCONSOLE_PLUGINS],
    integrations: [Permissions.PERMISSION_READ_SYSCONSOLE_INTEGRATIONS, Permissions.PERMISSION_WRITE_SYSCONSOLE_INTEGRATIONS],
    compliance: [Permissions.PERMISSION_READ_SYSCONSOLE_COMPLIANCE, Permissions.PERMISSION_WRITE_SYSCONSOLE_COMPLIANCE],
    experimental: [Permissions.PERMISSION_READ_SYSCONSOLE_EXPERIMENTAL, Permissions.PERMISSION_WRITE_SYSCONSOLE_EXPERIMENTAL],
};