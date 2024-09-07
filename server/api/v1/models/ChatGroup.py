from sqlmodel import SQLModel, Field, Relationship
from sqlalchemy import Column, String, table
from api.v1.models.mixins import TimeMixin
from typing import List, Optional
from datetime import datetime

class ChatGroup(SQLModel, TimeMixin, table=True):
    __tablename__ = "chat_groups"

    id: int = Field(primary_key=True, nullable=False)
    creation_dates: datetime = Field(sa_column=Column("creation_dates", String, nullable=True, unique=False))
    title: str = Field(sa_column=Column("title", String, nullable=True, unique=False))
    description : str = Field(sa_column=Column("description", String, nullable=True, unique=False))
    # 
    # relationship back_populates
    chat_group_details: List['ChatGroupDetails'] = Relationship(back_populates="chat_group")
    message: Optional["Message"] = Relationship(back_populates="chat_group")

