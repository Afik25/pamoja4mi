from sqlmodel import SQLModel, Field, Relationship
from sqlalchemy import Column, String, INTEGER, BOOLEAN, table
from api.v1.models.mixins import TimeMixin
from typing import List, Optional


class ProjectAssigned(SQLModel, TimeMixin, table=True):
    __tablename__ = "project_assigned"

    id: int = Field(primary_key=True, nullable=False, unique=True)
    type: str = Field(sa_column=Column("type", String, unique=False)) # individual/team
    description: str = Field(sa_column=Column("description", String, unique=False))
    thumbnail: str = Field(sa_column=Column("thumbnail", String, unique=False))

    user_id: Optional[int] = Field(
        default=None, foreign_key="users.id", nullable=False)
    user: Optional["User"] = Relationship(back_populates="project_assigned")

    project_id: Optional[int] = Field(
        default=None, foreign_key="projects.id", nullable=False)
    project: Optional["Project"] = Relationship(back_populates="project_assigned")

    
