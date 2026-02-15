
from rest_framework.permissions import BasePermission

class IsEditorOrAdmin(BasePermission):
    def has_permission(self, request, view):
        return request.user.groups.filter(
            name__in=['Admin','Editor']
        ).exists()
